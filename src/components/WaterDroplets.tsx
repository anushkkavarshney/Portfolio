import React, { useMemo, type CSSProperties } from 'react';

interface WaterDropletsProps {
  /** 'light' renders droplets tuned for cream backgrounds, 'dark' for the dark playbook canvas */
  theme?: 'light' | 'dark';
  /** Number of droplets to render */
  count?: number;
  /** Overall opacity multiplier */
  intensity?: number;
  className?: string;
  /** Use `contain` for a scrolling rect, `fixed` for a full-viewport backdrop */
  variant?: 'absolute' | 'fixed';
}

interface DropletSpec {
  size: number;
  left: number;
  duration: number;
  delay: number;
  sway: number;
  opacity: number;
}

const PALETTE = {
  light: {
    spec: 'rgba(255, 255, 255, 0.95)',
    tint: 'rgba(123, 229, 137, 0.16)',
    rim: 'rgba(123, 229, 137, 0.32)',
    shade: 'rgba(20, 19, 19, 0.22)',
    glow: 'rgba(123, 229, 137, 0.14)'
  },
  dark: {
    spec: 'rgba(255, 255, 255, 0.75)',
    tint: 'rgba(123, 229, 137, 0.2)',
    rim: 'rgba(123, 229, 137, 0.45)',
    shade: 'rgba(0, 0, 0, 0.4)',
    glow: 'rgba(123, 229, 137, 0.16)'
  }
};

/**
 * Soft floating water droplet ambience rendered with pure CSS gradients.
 * Zero canvas / GL cost — safe to layer behind any content.
 */
export const WaterDroplets: React.FC<WaterDropletsProps> = ({
  theme = 'light',
  count = 10,
  intensity = 1,
  className = '',
  variant = 'absolute'
}) => {
  const palette = PALETTE[theme];

  const droplets = useMemo<DropletSpec[]>(
    () =>
      Array.from({ length: count }, (_, i) => ({
        size: 14 + ((i * 37) % 46),
        left: ((i * 53 + 11) % 92) + 2,
        duration: 16 + ((i * 29) % 18),
        delay: ((i * 61) % 22) * -1,
        sway: 14 + ((i * 43) % 30),
        opacity: (0.24 + ((i * 17) % 30) / 100) * intensity
      })),
    [count, intensity]
  );

  return (
    <div
      aria-hidden="true"
      className={`${variant === 'fixed' ? 'fixed' : 'absolute'} inset-0 overflow-hidden pointer-events-none ${className}`}
    >
      {droplets.map((d, i) => (
        <div
          key={i}
          className="droplet"
          style={
            {
              width: d.size,
              height: d.size,
              left: `${d.left}%`,
              animationDuration: `${d.duration}s`,
              animationDelay: `${d.delay}s`,
              '--droplet-specular': palette.spec,
              '--droplet-tint': palette.tint,
              '--droplet-rim': palette.rim,
              '--droplet-shade': palette.shade,
              '--droplet-glow': palette.glow,
              '--droplet-sway': `${d.sway}px`,
              '--droplet-opacity': d.opacity.toFixed(2)
            } as CSSProperties
          }
        />
      ))}
    </div>
  );
};

export default WaterDroplets;

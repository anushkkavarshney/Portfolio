import React from 'react';

export const EngineerSvg: React.FC<{ className?: string; ready?: boolean }> = ({
  className = '',
  ready = true
}) => {
  return (
    <span className={`inline-flex items-center align-middle ${className}`}>
      <svg
        id="EngineerVisual"
        viewBox="0 0 290 85"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-auto h-[1em] max-h-[110px] overflow-visible select-none inline-block align-baseline"
      >
        <defs>
          {/* The reveal curtain that writes the word from left to right */}
          <clipPath id="engineerWriteClip">
            <rect
              x="-12"
              y="-24"
              width="320"
              height="135"
              className={`engineer-write-rect ${ready ? 'is-writing' : ''}`}
            />
          </clipPath>
        </defs>

        {/* Crisp vector cursive text without ANY blur filter */}
        <g clipPath="url(#engineerWriteClip)">
          <text
            x="6"
            y="62"
            fontFamily="'Great Vibes', cursive"
            fontSize="78"
            fontWeight="400"
            fill="#7be589"
            stroke="#7be589"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            letterSpacing="0.5"
            className="cursor-default"
          >
            Engineer
          </text>
        </g>

        {/* Clean crisp flourish sweep underline */}
        <path
          d="M 12,74 Q 90,82 170,72 T 280,75"
          stroke="#7be589"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
          className={`flourish-stroke ${ready ? 'is-writing' : ''}`}
        />
        <circle
          cx="282"
          cy="75"
          r="2.5"
          fill="#7be589"
          className={`flourish-dot ${ready ? 'is-writing' : ''}`}
        />
      </svg>
    </span>
  );
};

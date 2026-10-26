declare global {
  namespace JSX {
    interface IntrinsicElements {
      'model-viewer': React.DetailedHTMLProps<React.Attributes, HTMLElement> & {
        src?: string;
        alt?: string;
        'auto-rotate'?: boolean | number | string;
        'camera-controls'?: boolean | string;
        'shadow-intensity'?: number | string;
        exposure?: number | string;
        style?: string | React.CSSProperties;
        children?: React.ReactNode;
      };
    }
  }
}

export {};

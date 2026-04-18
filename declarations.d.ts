import 'react';

declare module '*.css';
declare module 'react';
declare module 'react-dom'
declare module 'react-dom/client';
declare module 'react-router-dom';
declare module 'lucide-react';
declare module 'tailwind-merge';
declare module 'clsx';
declare module 'react/jsx-runtime' {
  namespace JSX {
    interface IntrinsicElements {
      'shell_layout': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      'shell_breadcrumb': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      // Add any other custom elements here
    }
  }
}
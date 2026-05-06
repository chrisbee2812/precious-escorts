// src/vite-env.d.ts
declare module 'vite-plugin-prerender-static' {
  import { Plugin } from 'vite';
  
  interface PrerenderOptions {
    routes: Array<{ path: string; tags: Record<string, string> }>;
    render?: (route: { path: string }) => string | Promise<string>;
    template?: string;
    dist?: string;
  }
  
  export default function prerenderStatic(options: PrerenderOptions): Plugin;
}
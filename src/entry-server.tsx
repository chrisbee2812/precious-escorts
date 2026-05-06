// src/entry-server.tsx
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import App from './App';

export function render(url: string) {
  const appHtml = renderToString(
    <StaticRouter location={url}>
      <App />
    </StaticRouter>
  );
  return { html: appHtml };
}
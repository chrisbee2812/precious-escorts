import {StrictMode} from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Failed to find the root element');
}

if (rootElement.hasChildNodes()) {
  // Prerendered content exists → hydrate
  hydrateRoot(
    rootElement,
    <StrictMode>
      <App />
    </StrictMode>
  );
} else {
  // No prerendered content → normal render (e.g., dev mode)
  createRoot(rootElement).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
}
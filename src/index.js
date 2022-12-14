import "bootstrap/dist/css/bootstrap.min.css"
import "./index.css"
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App';

const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

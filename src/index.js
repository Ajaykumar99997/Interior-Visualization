import './style.css';
import { createRoot } from 'react-dom/client';
import React from 'react';
import App from './App';

const root = createRoot(document.querySelector('#root'));

root.render(
  <>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </>
);

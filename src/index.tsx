import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { init, backButton } from '@telegram-apps/sdk';

init();

backButton.mount();

const off = backButton.onClick(() => {
  off();
  window.history.back();
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


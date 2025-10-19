import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './assets/css/main.css';
import './assets/css/components.css';
import './assets/css/dark-theme.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

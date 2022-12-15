import React from 'react';
import ReactDOM from 'react-dom/client';
import { installTwicPics } from '@twicpics/components/react';
import '@twicpics/components/style.css';

import App from './App';

installTwicPics({
  domain: `https://demo.twic.pics`,
  anticipation: 0.5,
  step: 100
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

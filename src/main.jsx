import React from 'react';
import ReactDOM from 'react-dom/client';
import { installTwicPics } from '@twicpics/components/react';
import '@twicpics/components/style.css';

import App from './App';

installTwicPics({
  domain: `https://demo.twic.it`,
  anticipation: 0.5,
  step: 100,
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

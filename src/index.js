import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import 'react-toastify/dist/ReactToastify.css';
import '@aws-amplify/ui-react/styles.css';

import { App } from './app';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

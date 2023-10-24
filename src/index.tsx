import React from 'react';
import ReactDOM from 'react-dom/client';
import { Root } from './Root';
import './index.scss';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
);

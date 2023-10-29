import React from 'react';
import ReactDOM from 'react-dom/client';
import { CartContextProvider } from 'context/CartContext';
import { Root } from './Root';
import './index.scss';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <CartContextProvider>
    <React.StrictMode>
      <Root />
    </React.StrictMode>
  </CartContextProvider>,
);

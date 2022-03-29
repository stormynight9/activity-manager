import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

import { ModalContectProvider } from './context/modal-context';

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <ModalContectProvider>
        <App />
      </ModalContectProvider>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);



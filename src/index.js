import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { ModalContectProvider } from './context/modal-context';

ReactDOM.render(
  <React.StrictMode>
    <ModalContectProvider>
      <App />
    </ModalContectProvider>
  </React.StrictMode>,
  document.getElementById('root')
);



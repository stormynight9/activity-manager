import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

import { ModalContectProvider } from './context/modal-context';
import { DateContextProvider } from './context/date-context';
import { SelectedContextProvider } from './context/selected-context';

ReactDOM.render(
  <SelectedContextProvider>
    <DateContextProvider>
      <ModalContectProvider>
        <BrowserRouter>
          <React.StrictMode>
            <App />
          </React.StrictMode>
        </BrowserRouter>
      </ModalContectProvider >
    </DateContextProvider>
  </SelectedContextProvider>
  ,
  document.getElementById('root')
);



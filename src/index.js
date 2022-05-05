import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

import { ModalContectProvider } from './context/modal-context';
import { SelectedContextProvider } from './context/selected-context';
import { ProgrammeContextProvider } from './context/programme-context';

ReactDOM.render(
  <React.StrictMode>
    <ProgrammeContextProvider>
      <SelectedContextProvider>
        <ModalContectProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ModalContectProvider >
      </SelectedContextProvider>
    </ProgrammeContextProvider>
  </React.StrictMode>
  ,
  document.getElementById('root')
);



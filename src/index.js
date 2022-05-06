import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { ModalContectProvider } from './context/modal-context';
import { ProgrammeContextProvider } from './context/programme-context';
import { SelectedContextProvider } from './context/selected-context';
import './index.css';

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



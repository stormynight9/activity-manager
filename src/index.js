import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { DataContextProvider } from './context/data-context';
import { ModalContectProvider } from './context/modal-context';
import { ProgrammeContextProvider } from './context/programme-context';
import { SelectedContextProvider } from './context/selected-context';
import { UserContextProvider } from './context/user-context';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <UserContextProvider>
      <DataContextProvider>
        <ProgrammeContextProvider>
          <SelectedContextProvider>
            <ModalContectProvider>
              <BrowserRouter>
                <App />
              </BrowserRouter>
            </ModalContectProvider >
          </SelectedContextProvider>
        </ProgrammeContextProvider>
      </DataContextProvider>
    </UserContextProvider>
  </React.StrictMode>
  ,
  document.getElementById('root')
);



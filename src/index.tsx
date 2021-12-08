import React from 'react';

import ReactDOM from 'react-dom';

import GlobalStyle from './assets/styles/global';

import Routes from './Routes';

import { ToastContainer } from 'react-toastify';

ReactDOM.render(
  <React.StrictMode>
    <Routes />
    <GlobalStyle />
    <ToastContainer />
  </React.StrictMode>,

  document.getElementById('root'),
);

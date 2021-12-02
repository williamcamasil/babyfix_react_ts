import React from 'react';

import ReactDOM from 'react-dom';

import GlobalStyle from './assets/styles/global';

import Routes from './Routes';

ReactDOM.render(
  <React.StrictMode>
    <Routes />
    <GlobalStyle />
  </React.StrictMode>,

  document.getElementById('root'),
);

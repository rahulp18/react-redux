import ReactDOM from 'react-dom';
import React from 'react';
import App from './App';
import Store from './store';
import { Provider } from 'react-redux';

ReactDOM.render(
  <Provider store={Store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

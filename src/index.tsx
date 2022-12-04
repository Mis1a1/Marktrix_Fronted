import * as React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { store } from './store/store';
import App from './App'
import api from './util/api';

api();

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
)
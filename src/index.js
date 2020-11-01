import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux';
import { store } from './redux/store';

import { Search } from '../src/components/Search/Search';

import './scss/main.scss';
import { Background } from './components/Background/Background';
import { App } from './App';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Background/>
      <Search />
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

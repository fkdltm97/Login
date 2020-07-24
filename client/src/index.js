import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import {Provider} from 'react-redux'
import 'antd/dist/antd.css';
import { applyMiddleware , createStore } from 'redux';
import promiseMiddleware from 'redux-promise'
import ReduxThunk from 'redux-thunk'
import Reducer from './_reducers';
import * as serviceWorker from './serviceWorker';


const createStoreWithMiddleware = applyMiddleware(
  promiseMiddleware,
  ReduxThunk
  )(createStore);


ReactDOM.render(
  <Provider 
    store={createStoreWithMiddleware(
      Reducer,
      window._REDUX_DEVTOOLS_EXTENSION__&&
      window._REDUX_DEVTOOLS_EXTENSION__()
  )}
  >
    <App />,
  </Provider>,


document.getElementById('root')

);
serviceWorker.unregister();
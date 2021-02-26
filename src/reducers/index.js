import React from 'react';
import ReactDom from 'react-dom';
import './index.css';
import App from './App';
 import * as serviceWorker from './serviceWorker';
 import { createStore } from 'redux';
 import allReducer from './reducers';


 const store = createStore (allReducer);


 ReactDom.render(<App />, document.getElementById('root'));


 serviceWorker.unregister();
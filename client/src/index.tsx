import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider}  from 'react-redux';
import { createStore,applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";

import rootReducer from "./reducers";
import "./styles/index.css"
import App from './App';

const composeEnhancers = composeWithDevTools({});


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const store=createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)))
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);


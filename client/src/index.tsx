import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider}  from 'react-redux';
import { createStore } from "redux";

import "./styles/index.css"
import reducers from './reducers';
import App from './App';



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const store=createStore(reducers)
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);


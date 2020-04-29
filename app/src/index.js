import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import './index.css';
import App from './App';
import { reducer } from "./reducers";

// set up the store
// make sure to apply the thunk middleware
const store = createStore(reducer, applyMiddleware(thunk));

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>,
  rootElement
);

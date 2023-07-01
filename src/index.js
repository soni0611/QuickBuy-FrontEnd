import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import App from './App';
import { Provider } from "react-redux";
import store from "./redux/store.js";
import { positions, transitions, Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
const options = {
    timeout: 5000,
    position: positions.BOTTOM_CENTER,
    transitions: transitions.SCALE,
  };
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter><AlertProvider template={AlertTemplate} {...options}>
 <Provider store={store}>
    <App />
    </Provider> </AlertProvider>
    </BrowserRouter>
);


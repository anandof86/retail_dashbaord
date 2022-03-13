import React from 'react';
import ReactDOM from 'react-dom';
import DashboardApp from './app/containers';
import { Provider } from "react-redux";
import store from "./states/store"

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <DashboardApp />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

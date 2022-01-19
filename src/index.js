import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'mobx-react';
import RootStore from './store';

const rootStore = new RootStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider {...rootStore}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

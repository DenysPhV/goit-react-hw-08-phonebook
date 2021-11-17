import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';

import store from './redux/store';

import './index.css';
import App from './App';
import { LoaderSpinner } from './components/LoaderSpinner/LoaderSpinner';

ReactDom.render(
  <React.StrictMode>
    <PersistGate loading={<LoaderSpinner />} persistor={store.persistor}>
      <BrowserRouter>
        <Provider store={store.store}>
          <App />
        </Provider>
      </BrowserRouter>
    </PersistGate>
  </React.StrictMode>,
  document.getElementById('root'),
);

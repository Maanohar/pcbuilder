import React from 'react';
import Routes from './Routes/PublicRoutes';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './Services/Store';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

function App() {
  return (<Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
  <div>
    <Routes/>
  </div>
  </PersistGate>
  </Provider>);
}

export default App;

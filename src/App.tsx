import React from 'react';
import { Provider } from 'react-redux';
import Global from './style/Global';
import Router from './Router';
import { store } from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <Global />
      <Router />
    </Provider>
  );
}

export default App;

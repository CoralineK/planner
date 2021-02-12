import { createStore, applyMiddleware, compose } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
import reduxThunk from 'redux-thunk';
import { reducer } from './reducer';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { reactReduxFirebase } from 'react-redux-firebase';
import firebase from '../services/firebase';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['authReducer'],
};

const createStoreWithFirebase = compose(reactReduxFirebase(firebase))(
  createStore,
);

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = createStoreWithFirebase(
  persistedReducer,
  applyMiddleware(reduxThunk),
);
export const persistor = persistStore(store);

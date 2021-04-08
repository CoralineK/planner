import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { reducer } from './reducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['authReducer'],
};

const persistedReducer = persistReducer(persistConfig, reducer);

const middleware = [thunk];

export const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(...middleware)),
);
export const persistor = persistStore(store);

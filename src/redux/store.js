import { applyMiddleware, compose, createStore } from 'redux';
import axios from 'axios';
import thunk from 'redux-thunk';
import axiosMiddleware from 'redux-axios-middleware';
import rootReducer from './modules';

const client = axios.create({
  baseURL: 'https://api.exchangeratesapi.io/',
  responseType: 'json',
});

const composeEnhancers =
  (  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ) ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    }) : compose;

export const createClientStore = (preloadedState = {}) => {
  return createStore(
    rootReducer,
    preloadedState,
    composeEnhancers(applyMiddleware(axiosMiddleware(client), thunk)),
  );
};

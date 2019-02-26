import { applyMiddleware, compose, createStore } from 'redux';
import axios from "axios";
import axiosMiddleware from 'redux-axios-middleware';
import rootReducer from './modules';

const client = axios.create({
  baseURL: "https://openexchangerates.org/api/",
  responseType: 'json',
  params: {
    app_id: "dbc26becf70543f1ab4d0404fa4f77f1"
  },
});

const composeEnhancers =
  (  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ) ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    }) : compose;

export const createClientStore = (preloadedState = {}) => {
  return createStore(
    rootReducer,
    preloadedState,
    composeEnhancers(applyMiddleware(axiosMiddleware(client))),
  );
};

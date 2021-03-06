import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';
import { ScrollContext } from 'react-router-scroll-4';
import './theme/index.scss';
import { createClientStore } from './redux/store';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';

const store = createClientStore();

ReactDOM.render(
  <ReduxProvider store={store}>
    <HashRouter>
      <ScrollContext>
        <App />
      </ScrollContext>
    </HashRouter>
  </ReduxProvider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

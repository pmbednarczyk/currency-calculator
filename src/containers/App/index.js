import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import Helmet from 'react-helmet';
import routes from '../../routes';

const App = () => (
  <>
    <Helmet
      defaultTitle="Currency Calculator"
      title="Homepage"
      titleTemplate="%s | Currency Calculator"
    />
    <Switch>
      {
        routes.map((route, index) => <Route key={route.path || index} {...route} />)
      }
    </Switch>
  </>
);

export default withRouter(App);

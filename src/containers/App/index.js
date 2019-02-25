import React, { PureComponent } from 'react';
import '../../theme/index.scss';
import { Route, Switch, withRouter } from 'react-router-dom';
import Helmet from 'react-helmet';
import routes from '../../routes';

class App extends PureComponent {
  render() {
    return (
      <React.Fragment>
        <Helmet
          defaultTitle="Currency Calculator"
          title="Homepage"
          titleTemplate="%s | Currency Calculator"
        />
        <Switch>
          {routes.map(
            (route, index) => <Route key={route.path || index} {...route} />)}
        </Switch>
      </React.Fragment>
    );
  }
}

export default withRouter(App);

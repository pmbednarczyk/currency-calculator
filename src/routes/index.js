import Home from '../containers/Home';
import Converter from '../containers/Converter';

export default [{
  path: '/',
  component: Home,
  exact: true,
}, {
  path: '/converter',
  component: Converter,
  exact: true,
}];

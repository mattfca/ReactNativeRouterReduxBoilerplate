import { combineReducers } from 'redux';
import routes from './routes';
import authentication from './authentication';

export default combineReducers({
  routes,
  authentication,
});
import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';
// import { loginReducer } from 'react-redux-modules/lib/reducers/loginReducer';
import auth from './auth/reducer';

const root = combineReducers({
  router: routerReducer,
  auth,
});

export default root;

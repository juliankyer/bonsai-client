import { push } from 'react-router-redux';
import * as types from '../actionTypes';
import { createErrorMessage } from '../flashMessages/actions';
// import { showLoader, hideLoader } from '../loader/actions';
import Auth from '../../services/auth';
// import Loan from '../../services/loan';

export function authenticateFailure() {
  return { type: types.LOGIN__FAILURE };
}

export function authenticateSuccess(user) {
  return { type: types.LOGIN__SUCCESS, user };
}

export function logoutSucess() {
  return { type: types.LOGOUT };
}
export const login = (email, password) => {
  return async dispatch => {
    try {
      const response = await Auth.login(email, password);
      const { user, jwt, errors } = response;
      if (errors && errors.length) {
        dispatch(authenticateFailure());
        dispatch(createErrorMessage(errors));
      } else {
        dispatch(authenticateSuccess(user));
        sessionStorage.setItem('jwt', jwt);
        sessionStorage.setItem('user', JSON.stringify(user));
        const redirectUrl = sessionStorage.getItem('redirectUrl');
        if (redirectUrl && redirectUrl !== '/login' && redirectUrl !== '/') {
          sessionStorage.removeItem('redirectUrl');
          return dispatch(push(redirectUrl));
        } else {
          dispatch(push('/main'));
        }
      }
    } catch (error) {
      dispatch(authenticateFailure());
    }
  };
};

export function logout() {
  return async dispatch => {
    sessionStorage.clear();
    dispatch(logoutSucess());
    dispatch(push('/login'));
  };
}

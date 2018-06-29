import createReducer from '../createReducer';
import * as ActionTypes from '../actionTypes';

const initialUserState = {
  currentUser: {},
  isAuthenticated: false,
};

export default createReducer(initialUserState, {
  [ActionTypes.LOGIN__SUCCESS](state, action) {
    return {
      ...state,
      isAuthenticated: true,
      currentUser: action.user,
    };
  },
  [ActionTypes.LOGIN__FAILURE](state) {
    return { ...state, isAuthenticated: false };
  },
  [ActionTypes.LOGOUT](state) {
    return { ...state, ...initialUserState };
  },
});

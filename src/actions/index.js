import * as types from './actiontypes';

export const authenticationStarted = (): Object => {
  return {
    type: types.AUTHENTICATION_STARTED
  };
};

export const authenticationSuccess = (data: Object): Object => {
  return {
    type: types.AUTHENTICATION_SUCCESS,
    data
  };
};

export const authenticationFailed = (data: Object): Object => {
  return {
    type: types.AUTHENTICATION_FAILED,
    data
  };
};

export const fetchAuthentication = (): Function => {
  return (dispatch) => {
    dispatch(authenticationStarted());
    return setTimeout(() => {
      const data = {authenticated: true};
      dispatch(authenticationSuccess(data));
    }, 300);
  };
};
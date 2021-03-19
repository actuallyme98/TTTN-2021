import * as actionTypes from './action-types';

import { CometChat } from '@cometchat-pro/react-native-chat';

export const authStart = () => {
  return {
    type: actionTypes.AUTH_START,
  };
};

export const authSuccess = (user: any) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    user: user,
    isLoggedIn: true,
  };
};

export const authFail = (error: any) => {
  return {
    type: actionTypes.AUTH_FAIL,
    error: error,
  };
};

export const logoutSuccess = () => {
  return {
    type: actionTypes.AUTH_LOGOUT,
    authRedirectPath: '/login',
  };
};

export const logout = () => {
  return (dispatch: any) => {
    CometChat.logout().then(dispatch(logoutSuccess()));
  };
};

export const auth = (uid: any, authKey: any) => {
  return (dispatch: any) => {
    dispatch(authStart());

    CometChat.login(uid, authKey)
      .then((user) => {
        if (user) {
          dispatch(authSuccess(user));
        } else {
          dispatch(authFail(user));
        }
      })
      .catch((error) => {
        dispatch(authFail(error));
      });
  };
};

export const authCheckState = () => {
  return (dispatch: any) => {
    CometChat.getLoggedinUser()
      .then((user) => {
        if (user) {
          dispatch(authSuccess(user));
        } else {
          dispatch(authFail(user));
        }
      })
      .catch((error) => {
        dispatch(authFail(error));
      });
  };
};

export const setAuthRedirectPath = (path: any) => {
  return {
    type: actionTypes.SET_AUTH_REDIRECT_PATH,
    path: path,
  };
};

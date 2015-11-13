import fetch from 'isomorphic-fetch';
import config from '../../config';

import { parseJSON, checkHttpStatus } from '../utils';

import constants from '../constants';

export function signingUp() {
  return {
    type: constants.SIGNING_UP
  };
}

export function signedUp(account) {
  return {
    type: constants.SIGNED_UP,
    payload: {
      account: account
    }
  };
}

export function signUpError(error) {
  return {
    type: constants.SIGNUP_ERROR,
    payload: {
      status: error.response.status,
      statusText: error.response.statusText
    }
  };
}

export function signUp(account) {
  return (dispatch) => {
    const url = config.url + '/api/users';

    fetch(url, { method: 'post', body: account })
      .then(checkHttpStatus)
      .then(parseJSON)
      .then(response => {
        dispatch(signedUp(response));
      })
      .catch(error => {
        dispatch(signUpError(error));
      });
  };
}

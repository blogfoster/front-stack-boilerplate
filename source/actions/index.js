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

export function preferenceSelected(preference) {
  return { type: 'PREFERENCE_SELECTED', payload: preference };
}

export function preferenceSelectedError(error) {
  return { type: 'PREFERENCE_SELECTED_ERROR', payload: error };
}

export function selectPreference(preference) {
  return (dispatch) => {
    const url = config.url + '/api/users';

    fetch(url, { method: 'patch', body: { preference: preference } } )
      .then(checkHttpStatus)
      .then(parseJSON)
      .then(response => {
        // TODO:
        dispatch(preferenceSelected(response.data));
      })
      .catch(error => {
        // TODO
        dispatch(preferenceSelectedError(error.data));
      });
  };
}

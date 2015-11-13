// import fetch from 'isomorphic-fetch';
import {
  SIGNING_UP,
  SIGNED_UP
} from '../constants';

export function signingUp() {
  return {
    type: SIGNING_UP
  };
}

export function signedUp(account) {
  return {
    type: SIGNED_UP,
    payload: {
      account: account
    }
  };
}

export function signUp(account) {
  return (dispatch) => {
    dispatch(signingUp(account));

    setTimeout(() => {
      const token = Math.random().toString(36).substring(7);
      dispatch(signedUp({ firstName: 'Hey', lastName: 'Ho', token: token }));
    }, 1000);
  };
}

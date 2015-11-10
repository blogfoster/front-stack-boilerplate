import fetch from 'isomorphic-fetch';

export function login(account, redirect) {
  return dispatch => {
    // simulate request
    setTimeout(() => {
      const token = Math.random().toString(36).substring(7);
      dispatch({
        type: 'LOGGED_IN',
        payload: { token }
      });

      if (redirect) {
        redirect();
      }
    }, 300);
  };
}

// import fetch from 'isomorphic-fetch';

export function signUp(account) {
  return dispatch => {
    // simulate request
    setTimeout(() => {
      const token = Math.random().toString(36).substring(7);
      dispatch({
        type: 'LOGGED_IN',
        user: { firstName: 'Hey', lastName: 'Ho', token: token }
      });
    }, 300);
  };
}

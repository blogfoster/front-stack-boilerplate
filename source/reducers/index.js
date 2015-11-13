import { createReducer } from '../utils';

import constants from '../constants';

const initialState = {
  user: null,
  progressing: false,
  errors: []
};

const actionHandlers = {
  [constants.SIGNING_UP]: (state) => {
    return { ...state, user: null, progressing: true };
  },

  [constants.SIGNED_UP]: (state, payload) => {
    return { ...state, user: payload.account, progressing: false };
  },

  [constants.SIGNUP_ERROR]: (state, payload) => {
    const errors = [payload.error].concat(state.errors);

    return { ...state, errors };
  }
};

export const application = createReducer(initialState, actionHandlers);

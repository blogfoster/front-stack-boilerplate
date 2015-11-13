import { createReducer } from '../utils';

import {
  SIGNING_UP,
  SIGNED_UP
} from '../constants';

const initialState = {
  user: null,
  progressing: false,
  errors: []
};

const actionHandlers = {
  [SIGNING_UP]: (state) => {
    return { ...state, user: null, progressing: true };
  },

  [SIGNED_UP]: (state, action) => {
    return { ...state, user: action.user, progressing: false };
  }
};

export default createReducer(initialState, actionHandlers);

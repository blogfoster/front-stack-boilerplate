import createReducer from '../utils/createReducer';

const initialState = {
  user: null,
  progressing: false,
  errors: []
};

const actionHandlers = {
  'LOGGING_IN': (state) => {
    return { ...state, user: null, progressing: true };
  },

  'LOGGED_IN': (state, action) => {
    return { ...state, user: action.user, progressing: false };
  }
};

export default createReducer(initialState, actionHandlers);

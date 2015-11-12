import createReducer from '../utils/createReducer';

const initialState = {
  user: null,
  errors: []
};

const actionHandlers = {
  'LOGGED_IN': (state, action) => {
    return { ...state, user: action.user };
  }
};

export default createReducer(initialState, actionHandlers);

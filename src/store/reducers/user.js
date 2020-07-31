import {
  SET_USER,
  FETCH_USER_START,
  FETCH_USER_FAIL,
  FETCH_USER_NOT_FOUND,
  CLEAR_USER,
} from "../actions/user";

const initialState = {
  user: {},
  isLoading: false,
  isNotFound: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_START:
      return {
        ...state,
        isLoading: true,
        isNotFound: false,
      };
    case SET_USER:
      const { user } = action;
      return { ...state, user, isLoading: false, isNotFound: false };
    case CLEAR_USER:
      return { ...state, user: {}, isLoading: false, isNotFound: false };
    case FETCH_USER_FAIL:
      return { ...state, isLoading: false, isNotFound: false };
    case FETCH_USER_NOT_FOUND:
      return { ...state, isLoading: false, isNotFound: true };
    default:
      return state;
  }
};

import { ACTION_TYPES } from "./postActionTypes";

export const INITIAL_STATE = {
  post: {},
  error: false,
  loading: false,
};

export const postReducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.FETCH_STATE:
      return {
        loading: true,
        error: false,
        post: {},
      };
    case ACTION_TYPES.FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        post: action.payload,
      };
    case ACTION_TYPES.FETCH_FAILD:
      return {
        error: true,
        loading: false,
        post: {},
      };
    default:
      return state;
  }
};

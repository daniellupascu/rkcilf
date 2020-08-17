import {
  FETCH_FLICKR_START,
  FETCH_FLICKR_FAIL,
  FLICKR_NOT_FOUND,
  FLICKR_SET_DATA,
} from "../actions/flickr";

const initialState = {
  images: [],
  isLoading: false,
  isNotFound: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_FLICKR_START:
      return {
        ...state,
        isLoading: true,
        isNotFound: false,
      };
    case FETCH_FLICKR_FAIL:
      return { ...state, isLoading: false, isNotFound: false };
    case FLICKR_NOT_FOUND:
      return { ...state, isLoading: false, isNotFound: true };
    case FLICKR_SET_DATA:
      const { images } = action;
      return { ...state, images, isLoading: false, isNotFound: false };

    default:
      return state;
  }
};

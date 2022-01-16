import {
  GET_VIDEOS,
  GET_SINGLE_VIDEO,
  GET_SELECTED_VIDEO,
} from '../utils/actions';

const globalReducer = (state, action) => {
  switch (action.type) {
    case GET_VIDEOS:
      return {
        ...state,
        videos: action.payload,
      };
    case GET_SELECTED_VIDEO:
      return {
        ...state,
        selected_video: action.payload,
      };
    case GET_SINGLE_VIDEO:
      return {
        ...state,
        selected_video: action.payload,
      };
    default:
      return state;
  }
};

export default globalReducer;

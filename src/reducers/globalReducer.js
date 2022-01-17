import {
  GET_VIDEOS,
  GET_SELECTED_VIDEO,
  LIGHTMODE,
  DARKMODE,
} from '../utils/actions';

const globalReducer = (state, action) => {
  switch (action.type) {
    case GET_VIDEOS:
      return {
        ...state,
        videos: action.payload,
      };
    case GET_SELECTED_VIDEO: {
      return {
        ...state,
        video: action.payload,
      };
    }
    case LIGHTMODE:
      return { darkMode: false };
    case DARKMODE:
      return { darkMode: true };

    default:
      return state;
  }
};

export default globalReducer;

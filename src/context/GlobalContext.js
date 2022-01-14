import axios from 'axios';
import React, { createContext, useContext, useReducer } from 'react';
import globalReducer from '../reducers/globalReducer';
import { YT_BASE_URL } from '../utils/constants';
import { GET_VIDEOS } from '../utils/actions';

const initialState = {
  videos_loading: false,
  videos_error: false,
  videos: [],
  selected_video_loading: false,
  selected_video_error: false,
  selected_video: '',
};

export const GlobalContext = createContext();
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(globalReducer, initialState);

  //fetching videos
  const fetchVideos = async (searchTerm) => {
    const controller = new AbortController();
    try {
      const response = await axios.get(YT_BASE_URL, {
        params: {
          part: 'snippet',
          maxResults: 16,
          key: process.env.REACT_APP_YT_APIKEY,
          q: searchTerm,
        },
        signal: controller.signal,
      });
      const items = response.data.items;

      const filterOnlyVideos = items.filter((video) => {
        return video.id.kind === 'youtube#video';
      });
      dispatch({ type: GET_VIDEOS, payload: filterOnlyVideos });
    } catch (error) {
      return;
    }
    return () => {
      controller.abort();
    };
  };

  return (
    <GlobalContext.Provider
      value={{
        ...state,
        fetchVideos,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalcontext = () => {
  return useContext(GlobalContext);
};

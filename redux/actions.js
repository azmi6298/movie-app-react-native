import axios from "axios";
import { TMDB_API_KEY } from "@env";

export const GET_RECOMMENDATIONS = "GET_RECOMMENDATIONS";
export const GET_NOW_PLAYING = "GET_NOW_PLAYING";

const TMDB_API_URL = "https://api.themoviedb.org/3/movie";

export const getRecommendations = () => {
  try {
    return async (dispatch) => {
      const res = await axios.get(
        `${TMDB_API_URL}/popular?api_key=${TMDB_API_KEY}&language=en-US&page=1`
      );

      if (res.data) {
        dispatch({
          type: GET_RECOMMENDATIONS,
          payload: res.data,
        });
      }
    };
  } catch (error) {}
};

export const getNowPlaying = () => {
  try {
    return async (dispatch) => {
      const res = await axios.get(
        `${TMDB_API_URL}/now_playing?api_key=${TMDB_API_KEY}&language=en-US&page=1`
      );

      if (res.data) {
        dispatch({
          type: GET_NOW_PLAYING,
          payload: res.data,
        });
      }
    };
  } catch (error) {}
};

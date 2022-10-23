import axios from "axios";
import { TMDB_API_KEY } from "@env";

export const GET_RECOMMENDATIONS = "GET_RECOMMENDATIONS";
export const GET_NOW_PLAYING = "GET_NOW_PLAYING";

export const RECOMMENDATION = "popular";
export const NOW_PLAYING = "now_playing";

const TMDB_API_URL = "https://api.themoviedb.org/3/movie";

export const getMovieList = (page = 1, filterType, action) => {
  try {
    if (page >= 1 && action == "next") {
      page += 1;
    } else if (page > 1) {
      page -= 1;
    }

    const dispatchType =
      filterType == RECOMMENDATION ? GET_RECOMMENDATIONS : GET_NOW_PLAYING;

    return async (dispatch) => {
      const res = await axios.get(
        `${TMDB_API_URL}/${filterType}?api_key=${TMDB_API_KEY}&language=en-US&page=${page}`
      );

      if (res.data) {
        dispatch({
          type: dispatchType,
          payload: res.data,
        });
      }
    };
  } catch (error) {}
};

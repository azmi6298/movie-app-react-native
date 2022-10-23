import { GET_RECOMMENDATIONS, GET_NOW_PLAYING } from "./actions";

const initialState = {
  recommendations: [],
  nowPlaying: [],
};

export default function stateReducer(state = initialState, action) {
  switch (action.type) {
    case GET_RECOMMENDATIONS:
      return { ...state, recommendations: action.payload };
    case GET_NOW_PLAYING:
      return { ...state, nowPlaying: action.payload };
    default:
      return state;
  }
}

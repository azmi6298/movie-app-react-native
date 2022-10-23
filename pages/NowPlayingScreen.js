import { useEffect } from "react";
import ListComponent from "../components/ListComponent";
import { useSelector, useDispatch } from "react-redux";
import { getMovieList, NOW_PLAYING } from "../redux/actions";

export default function RecommendationScreen() {
  const { page, total_pages, results } = useSelector(
    (state) => state.nowPlaying
  );
  const dispatch = useDispatch();

  const fetchData = () => dispatch(getMovieList(1, NOW_PLAYING));

  useEffect(() => {
    fetchData();
  }, []);

  const handlePressButtonPage = (action) => {
    dispatch(getMovieList(page, NOW_PLAYING, action));
  };

  return (
    <ListComponent
      listData={results}
      currentPage={page}
      totalPage={total_pages}
      onPress={handlePressButtonPage}
    />
  );
}

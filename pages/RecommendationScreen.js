import { useEffect } from "react";
import ListComponent from "../components/ListComponent";
import { useSelector, useDispatch } from "react-redux";
import { getMovieList, RECOMMENDATION } from "../redux/actions";

export default function RecommendationScreen() {
  const { page, total_pages, results } = useSelector(
    (state) => state.recommendations
  );
  const dispatch = useDispatch();

  const fetchData = () => dispatch(getMovieList(1, RECOMMENDATION));

  useEffect(() => {
    fetchData();
  }, []);

  const handlePressButtonPage = (action) => {
    dispatch(getMovieList(page, RECOMMENDATION, action));
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

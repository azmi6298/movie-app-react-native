import { useEffect } from "react";
import ListComponent from "../components/ListComponent";
import { useSelector, useDispatch } from "react-redux";
import { getRecommendations } from "../redux/actions";

export default function RecommendationScreen() {
  const { results } = useSelector((state) => state.recommendations);
  const dispatch = useDispatch();

  const fetchData = () => dispatch(getRecommendations());

  useEffect(() => {
    fetchData();
  }, []);

  return <ListComponent listData={results} />;
}

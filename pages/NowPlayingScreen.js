import { useEffect, useState } from "react";
import ListComponent from "../components/ListComponent";
import { useSelector, useDispatch } from "react-redux";
import { getNowPlaying } from "../redux/actions";

export default function RecommendationScreen() {
  const { results } = useSelector((state) => state.nowPlaying);
  const dispatch = useDispatch();

  const fetchData = () => dispatch(getNowPlaying());

  useEffect(() => {
    fetchData();
  }, []);

  return <ListComponent listData={results} />;
}

import { useEffect, useState } from "react";
import ListComponent from "../components/ListComponent";

export default function RecommendationScreen({ movieList }) {
  const [recommendation, setRecommendation] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/movie/now_playing?api_key=525c6f907087e3f783523cb5d763901e&language=en-US&page=1`
        );

        const data = await res.json();
        setRecommendation(data.results);
      } catch (err) {}
    };

    fetchData();
  }, []);

  return <ListComponent listData={recommendation} />;
}

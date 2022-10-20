import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import { useEffect, useState } from "react";

export default function App() {
  const [recommendation, setRecommendation] = useState([]);

  useEffect(() => {
    const fetchRecommendation = async () => {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.TMDB_API_KEY}&language=en-US&page=1`
        );

        const data = await res.json();
        setRecommendation(data.results);
      } catch (err) {}
    };

    fetchRecommendation();
  }, []);

  return (
    <View style={styles.container}>
      <Text>Movie Recommendation</Text>

      {recommendation?.map((movie) => (
        <View style={styles.card} key={movie.id}>
          <Image
            style={styles.poster}
            source={{
              uri: `${BASE_IMAGE_URL}${movie.poster_path}`,
            }}
          />
          <Text>{movie.title}</Text>
          <Text>{movie.release_date}</Text>
        </View>
      ))}
      <StatusBar style="auto" />
    </View>
  );
}

const BASE_IMAGE_URL = "https://image.tmdb.org/t/p/w500";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: "2rem",
  },
  card: {
    width: "300px",
    height: "150px",
    paddingVertical: "2rem",
    paddingHorizontal: "2rem",
    marginVertical: "1rem",
    border: "black solid 1px",
    borderRadius: "4px",
  },
  poster: {
    width: 50,
    height: 50,
  },
});

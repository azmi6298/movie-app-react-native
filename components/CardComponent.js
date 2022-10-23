import { StyleSheet, Image } from "react-native";
import { Card, Text } from "@ui-kitten/components";

const BASE_IMAGE_URL = "https://image.tmdb.org/t/p/w500";

const styles = StyleSheet.create({
  card: {
    height: "300px",
    paddingVertical: "2rem",
    paddingHorizontal: "2rem",
    marginVertical: "1rem",
  },
  poster: {
    height: 200,
  },
});

export default function CardComponent({ cardData }) {
  return (
    <Card style={styles.card}>
      <Image
        style={styles.poster}
        source={{
          uri: `${BASE_IMAGE_URL}${cardData.poster_path}`,
        }}
      />
      <Text>{cardData.title}</Text>
      <Text>{cardData.release_date}</Text>
    </Card>
  );
}

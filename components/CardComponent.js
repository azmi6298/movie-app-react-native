import { StyleSheet, Image } from "react-native";
import { Card, Text, Layout } from "@ui-kitten/components";

const BASE_IMAGE_URL = "https://image.tmdb.org/t/p/w500";

const styles = StyleSheet.create({
  card: {
    height: "300px",
    paddingVertical: "2rem",
    paddingHorizontal: "1rem",
    marginVertical: "1rem",
  },
  layout: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  poster: {
    width: 100,
    height: 200,
    marginRight: "16px",
  },
});

export default function CardComponent({ cardData }) {
  return (
    <Card style={styles.card}>
      <Layout style={styles.layout}>
        <Image
          style={styles.poster}
          source={{
            uri: `${BASE_IMAGE_URL}${cardData.poster_path}`,
          }}
        />
        <Layout style={{ width: 200 }}>
          <Text category="h6">{cardData.title}</Text>
          <Text>{cardData.release_date}</Text>
        </Layout>
      </Layout>
    </Card>
  );
}

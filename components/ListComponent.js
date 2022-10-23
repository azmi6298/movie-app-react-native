import { StyleSheet, Image } from "react-native";
import { List, Card, Text } from "@ui-kitten/components";

export default function ListComponent({ listData }) {
  const renderItem = ({ item }) => (
    <Card style={styles.card}>
      <Image
        style={styles.poster}
        source={{
          uri: `${BASE_IMAGE_URL}${item.poster_path}`,
        }}
      />
      <Text>{item.title}</Text>
      <Text>{item.release_date}</Text>
    </Card>
  );

  return (
    <List
      contentContainerStyle={styles.contentContainer}
      data={listData}
      renderItem={renderItem}
    />
  );
}

const BASE_IMAGE_URL = "https://image.tmdb.org/t/p/w500";

const styles = StyleSheet.create({
  card: {
    height: "150px",
    paddingVertical: "2rem",
    paddingHorizontal: "2rem",
    marginVertical: "1rem",
  },
  poster: {
    width: 50,
    height: 50,
  },
  contentContainer: {
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  item: {
    marginVertical: 4,
  },
});

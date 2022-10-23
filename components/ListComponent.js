import { StyleSheet } from "react-native";
import { List } from "@ui-kitten/components";
import CardComponent from "./CardComponent";

export default function ListComponent({ listData }) {
  const renderItem = ({ item }) => <CardComponent cardData={item} />;

  return (
    <List
      contentContainerStyle={styles.contentContainer}
      data={listData}
      renderItem={renderItem}
    />
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  item: {
    marginVertical: 4,
  },
});

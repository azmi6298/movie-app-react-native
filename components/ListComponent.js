import { StyleSheet } from "react-native";
import { List, Button, Layout } from "@ui-kitten/components";
import CardComponent from "./CardComponent";

export default function ListComponent({
  listData,
  currentPage,
  totalPage,
  onPress,
}) {
  const renderItem = ({ item }) => <CardComponent cardData={item} />;

  return (
    <>
      <List
        contentContainerStyle={styles.contentContainer}
        data={listData}
        renderItem={renderItem}
      />
      <Layout style={styles.pagination}>
        {currentPage > 1 && (
          <Button appearance="outline" onPress={() => onPress("prev")}>
            Prev Page
          </Button>
        )}
        {currentPage < totalPage && (
          <Button appearance="outline" onPress={() => onPress("next")}>
            Next Page
          </Button>
        )}
      </Layout>
    </>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  pagination: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
});

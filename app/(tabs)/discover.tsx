import { Container, IconButton, NewUserItem, TopBar } from "@/components";
import { fakeUsers } from "@/data/fakeUsers";
import { FlatList, StyleSheet } from "react-native";

export default function DiscoverScreen() {
  return (
    <Container>
      <TopBar title="Discover" rightButton={<IconButton name="bell" />} />
      <FlatList
        data={fakeUsers}
        keyExtractor={(item) => `${item.id}`}
        renderItem={({ item }) => <NewUserItem user={item} />}
        showsHorizontalScrollIndicator={false}
        horizontal
        style={styles.userList}
      />
    </Container>
  );
}

const styles = StyleSheet.create({
  userList: {
    marginTop: 16,
    paddingLeft: 16,
  },
});

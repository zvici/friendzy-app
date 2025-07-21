import {
  Container,
  IconButton,
  NewUserItem,
  Text,
  TopBar,
  TopicItem,
  View,
} from "@/components";
import colors from "@/constants/colors";
import { fakeTopics } from "@/data/fakeTopics";
import { fakeUsers } from "@/data/fakeUsers";
import { FlatList, StyleSheet } from "react-native";
import MapView from "react-native-maps";

export default function DiscoverScreen() {
  return (
    <Container>
      <TopBar title="Discover" rightButton={<IconButton name="bell" />} />
      <View style={styles.userList}>
        <FlatList
          data={fakeUsers}
          keyExtractor={(item) => `${item.id}`}
          renderItem={({ item }) => <NewUserItem user={item} />}
          showsHorizontalScrollIndicator={false}
          horizontal
        />
      </View>
      <View
        row
        justifyContent="space-between"
        paddingHorizontal={16}
        alignItems="center"
        marginBottom={16}
      >
        <Text variant="heading2">Interest</Text>
        <Text fontWeight="bold" color={colors.dark.secondary}>
          View all
        </Text>
      </View>
      <View marginBottom={16}>
        <FlatList
          data={fakeTopics}
          keyExtractor={(item) => item}
          renderItem={({ item }) => <TopicItem topic={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <MapView style={styles.map} scrollEnabled={false} />
    </Container>
  );
}

const styles = StyleSheet.create({
  userList: {
    marginVertical: 16,
    marginBottom: 24,
  },
  map: {
    width: "100%",
    height: 343,
    paddingHorizontal: 16,
    borderRadius: 16,
  },
});

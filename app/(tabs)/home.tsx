import { Container, IconButton, StoryItem, TopBar } from "@/components";
import { fakeStories } from "@/data/fakeStories";
import { FlatList, ScrollView, StyleSheet } from "react-native";

export default function HomeScreen() {
  return (
    <Container>
      <TopBar title="Friendzy" rightButton={<IconButton name="bell" />} />
      <ScrollView style={styles.main}>
        <FlatList
          data={fakeStories}
          horizontal
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <StoryItem name={item.name} />}
          style={styles.story}
        />
      </ScrollView>
    </Container>
  );
}
const styles = StyleSheet.create({
  main: {},
  story: {
    paddingHorizontal: 16,
    marginTop: 16,
  },
});

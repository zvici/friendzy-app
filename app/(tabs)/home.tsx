import {
  Container,
  FeedItem,
  IconButton,
  Segmented,
  StoryItem,
  TopBar,
  View,
} from "@/components";
import { LAYOUT } from "@/constants/layout";
import { fakeFeeds } from "@/data/fakeFeeds";
import { fakeStories } from "@/data/fakeStories";
import { FlatList, ScrollView, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function HomeScreen() {
  const insets = useSafeAreaInsets();

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
        <Segmented
          values={["Make Friends", "Search Partners"]}
          style={styles.segmented}
        />
        <View
          style={[
            styles.feeds,
            { paddingBottom: insets.bottom + LAYOUT.TAB_BAR_HEIGHT },
          ]}
        >
          {fakeFeeds.map((feed) => (
            <FeedItem
              key={feed.id}
              position={feed.position}
              topic={feed.topic}
              author={feed.author}
              content={feed.content}
            />
          ))}
        </View>
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
  segmented: {
    marginHorizontal: 16,
    marginTop: 16,
  },
  feeds: {
    paddingHorizontal: 16,
    marginTop: 24,
  },
});

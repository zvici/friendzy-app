import Text from "@/components/ui/text";
import View from "@/components/ui/view";
import colors from "@/constants/colors";
import { StyleSheet } from "react-native";

interface TopicItemProps {
  topic: string;
}

export default function TopicItem({ topic }: TopicItemProps) {
  return (
    <View style={styles.topicItem}>
      <Text style={styles.topicText}>{topic}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  topicItem: {
    padding: 8,
    marginLeft: 12,
    borderRadius: 36,
    borderWidth: 1,
    borderColor: colors.light.primary,
  },
  topicText: {
    fontSize: 16,
    color: "#333",
  },
});

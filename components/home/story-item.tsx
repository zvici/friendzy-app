import Image from "@/components/ui/image";
import Text from "@/components/ui/text";
import View from "@/components/ui/view";
import colors from "@/constants/colors";
import { Pressable, StyleSheet } from "react-native";

interface StoryItemProps {
  name: string;
}

export default function StoryItem(props: StoryItemProps) {
  const { name } = props;
  return (
    <Pressable style={styles.storyItem}>
      <View style={styles.avatar}>
        <Image
          source={require("@/assets/images/users/moka.jpg")}
          width={56}
          height={56}
          style={styles.avatarImage}
        />
      </View>
      <Text>{name}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  storyItem: {
    height: 90,
    width: 64,
    alignItems: "center",
    marginRight: 16,
  },
  avatar: {
    borderRadius: 32,
    width: 64,
    height: 64,
    borderWidth: 2,
    borderColor: colors.light.secondary,
    padding: 4,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 6,
  },
  avatarImage: {
    borderRadius: 28,
  },
});

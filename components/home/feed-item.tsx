import Image from "@/components/ui/image";
import Text from "@/components/ui/text";
import View from "@/components/ui/view";
import colors from "@/constants/colors";
import { ImageBackground } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { Dimensions, StyleSheet } from "react-native";

const { width } = Dimensions.get("window");

interface Props {
  position: string;
  topic: string;
  author: string;
  content: string;
}

export default function FeedItem(props: Props) {
  const { position, topic, author, content } = props;
  return (
    <ImageBackground
      source={{
        uri: "https://picsum.photos/800?random=" + Math.random(),
      }}
      style={styles.background}
    >
      <LinearGradient
        colors={["rgba(0,0,0,0.5)", "transparent", "rgba(0,0,0,0.5)"]}
        style={StyleSheet.absoluteFillObject}
      />

      <View style={styles.topic}>
        <Text color={colors.dark.text}>{topic}</Text>
      </View>
      <View style={styles.content}>
        <Text fontSize={20} color={colors.dark.text}>
          {content}
        </Text>
        <View style={styles.profile}>
          <Image
            source={require("@/assets/images/users/moka.jpg")}
            style={styles.avatar}
          />
          <View>
            <Text fontSize={14} color={colors.dark.text} fontWeight="bold">
              {author}
            </Text>
            <Text fontSize={14} color={colors.dark.text}>
              {position}
            </Text>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    width: width - 32,
    height: width,
    borderRadius: 16,
    marginBottom: 16,
    overflow: "hidden",
    padding: 16,
    justifyContent: "space-between",
  },
  topic: {
    backgroundColor: "rgba(256, 256, 256, 0.2)",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 32,
    alignSelf: "flex-start",
    borderWidth: 1,
    borderColor: colors.dark.text,
  },
  content: {},
  profile: {
    flexDirection: "row",
    marginTop: 16,
    alignItems: "center",
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
});

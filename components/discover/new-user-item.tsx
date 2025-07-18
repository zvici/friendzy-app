import Text from "@/components/ui/text";
import View from "@/components/ui/view";
import colors from "@/constants/colors";
import { ImageBackground } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet } from "react-native";

interface Props {
  user: {
    id: number;
    name: string;
    age: number;
    location: string;
    distance: number;
  };
}

export default function NewUserItem(props: Props) {
  const { user } = props;
  return (
    <ImageBackground
      source={{
        uri: "https://i.pravatar.cc/200?" + Math.random(),
      }}
      style={styles.card}
    >
      <LinearGradient
        colors={["transparent", "#4B164C"]}
        style={StyleSheet.absoluteFillObject}
      />
      <View style={styles.newText}>
        <Text color="white" fontSize={12}>
          NEW
        </Text>
      </View>
      <View style={styles.distance}>
        <Text color="white" fontSize={12}>
          {user.distance} km away
        </Text>
      </View>
      <Text color="white" fontSize={12} fontWeight="bold" marginBottom={4}>
        {user.name}, {user.age}
      </Text>
      <Text color="gray" fontSize={12}>
        {user.location}
      </Text>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 105,
    height: 160,
    borderRadius: 16,
    marginRight: 12,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: 8,
  },
  newText: {
    position: "absolute",
    top: 8,
    left: 8,
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    backgroundColor: colors.dark.primary,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.dark.secondary,
  },
  distance: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "white",
    marginBottom: 4,
  },
});

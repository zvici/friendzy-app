import IconButton from "@/components/ui/icon-button";
import Text from "@/components/ui/text";
import View from "@/components/ui/view";
import { useRouter } from "expo-router";
import { StyleSheet } from "react-native";

interface Props {
  showBackButton?: boolean;
  rightButton?: React.ReactNode;
  title?: string;
}

export default function TopBar(props: Props) {
  const { showBackButton, rightButton, title } = props;
  const router = useRouter();

  const handleBackPress = () => {
    if (router.canGoBack()) {
      router.back();
    } else {
      console.warn("No previous screen to go back to.");
    }
  };

  return (
    <View style={styles.topBar}>
      {showBackButton && <IconButton name="back" onPress={handleBackPress} />}
      <Text variant="heading3">{title}</Text>
      {rightButton}
    </View>
  );
}

const styles = StyleSheet.create({
  topBar: {
    height: 48,
    marginTop: 8,
    width: "100%",
    flexDirection: "row",
    paddingHorizontal: 16,
    justifyContent: "space-between",
    alignItems: "center",
  },
});

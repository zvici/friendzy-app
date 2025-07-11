import { IconNames } from "@/assets/svg";
import Icon from "@/components/ui/icon";
import colors from "@/constants/colors";
import { StyleSheet, TouchableOpacity } from "react-native";

interface Props {
  onPress?: () => void;
  name: IconNames;
}

export default function IconButton(props: Props) {
  const { onPress, name } = props;
  return (
    <TouchableOpacity onPress={onPress} style={styles.iconButton}>
      <Icon name={name} size={24} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  iconButton: {
    height: 40,
    width: 40,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: colors.light.secondary,
    borderRadius: 24,
  },
});

import colors from "@/constants/colors";
import SegmentedControl from "@react-native-segmented-control/segmented-control";
import { StyleProp, StyleSheet, ViewStyle } from "react-native";

type Props = React.ComponentProps<typeof SegmentedControl> & {
  values: string[];
  style?: StyleProp<ViewStyle>;
};

export default function Segmented(props: Props) {
  const { values, style, ...restProps } = props;
  return (
    <SegmentedControl
      values={values}
      {...restProps}
      style={[style, styles.segmented]}
      sliderStyle={styles.slider}
      tabStyle={styles.tab}
      backgroundColor={colors.light.background2}
    />
  );
}

const styles = StyleSheet.create({
  segmented: {
    borderRadius: 8,
    overflow: "hidden",
  },
  slider: {},
  tab: {},
});

import colors from "@/constants/colors";
import React, { ReactNode } from "react";
import { DimensionValue, StyleSheet, View, ViewStyle } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface ContainerProps {
  children: ReactNode;
  style?: ViewStyle;
  padding?: DimensionValue;
  centered?: boolean;
  flex?: number;
  fullScreen?: boolean;
}

const Container: React.FC<ContainerProps> = ({
  children,
  style,
  padding,
  centered = false,
  flex = 1,
  fullScreen = false,
}) => {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.container,
        {
          flex,
          padding,
          ...(centered ? styles.centered : {}),
          ...(fullScreen ? {} : { paddingTop: insets.top }),
        },
        style,
      ]}
    >
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: colors.light.background,
  },
  centered: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Container;

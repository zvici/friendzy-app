import React, { ReactNode } from "react";
import { DimensionValue, StyleSheet, View, ViewStyle } from "react-native";

interface ContainerProps {
  children: ReactNode;
  style?: ViewStyle;
  padding?: DimensionValue;
  margin?: DimensionValue;
  centered?: boolean;
  flex?: number;
  backgroundColor?: string;
}

const Container: React.FC<ContainerProps> = ({
  children,
  style,
  padding,
  margin,
  centered = false,
  flex = 1,
  backgroundColor = "transparent",
}) => {
  return (
    <View
      style={[
        styles.container,
        {
          flex,
          padding,
          margin,
          backgroundColor,
          ...(centered ? styles.centered : {}),
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
  },
  centered: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Container;

import React, { forwardRef } from "react";
import {
  DimensionValue,
  View as RNView,
  StyleSheet,
  ViewProps,
} from "react-native";

interface CustomViewProps extends ViewProps {
  center?: boolean;
  padding?: DimensionValue;
  margin?: DimensionValue;
  flex?: number;
  row?: boolean;
  wrap?: boolean;
  justifyContent?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly";
  alignItems?: "flex-start" | "flex-end" | "center" | "stretch" | "baseline";
  backgroundColor?: string;
  rounded?: number | boolean;
  shadow?: boolean;
  elevation?: number;
}

const View = forwardRef<RNView, CustomViewProps>(
  (
    {
      style,
      center,
      padding,
      margin,
      flex,
      row,
      wrap,
      justifyContent,
      alignItems,
      backgroundColor,
      rounded,
      shadow,
      elevation,
      ...props
    },
    ref
  ) => {
    const customStyle = [
      center && styles.center,
      padding !== undefined && { padding },
      margin !== undefined && { margin },
      flex !== undefined && { flex },
      row && styles.row,
      wrap && styles.wrap,
      justifyContent !== undefined && { justifyContent },
      alignItems !== undefined && { alignItems },
      backgroundColor !== undefined && { backgroundColor },
      rounded === true
        ? styles.rounded
        : rounded
        ? { borderRadius: rounded }
        : undefined,
      shadow && styles.shadow,
      elevation !== undefined && { elevation },
      style,
    ];

    return <RNView ref={ref} style={customStyle} {...props} />;
  }
);

const styles = StyleSheet.create({
  center: {
    justifyContent: "center",
    alignItems: "center",
  },
  row: {
    flexDirection: "row",
  },
  wrap: {
    flexWrap: "wrap",
  },
  rounded: {
    borderRadius: 8,
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});

View.displayName = "View";

export default View;

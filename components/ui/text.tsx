import React from "react";
import {
  Text as RNText,
  TextProps as RNTextProps,
  StyleSheet,
} from "react-native";

export interface TextProps extends RNTextProps {
  variant?: "heading1" | "heading2" | "heading3" | "body" | "caption";
  fontSize?: number;
  fontWeight?: "normal" | "bold" | "500" | "600" | "700";
  italic?: boolean;
  color?: string;
  align?: "auto" | "left" | "right" | "center" | "justify";
  lineHeight?: number;
  marginBottom?: number;
  marginTop?: number;
  children: React.ReactNode;
}

export default function Text({
  variant,
  fontSize,
  fontWeight,
  italic,
  color,
  align,
  lineHeight,
  style,
  children,
  marginBottom,
  marginTop,
  ...props
}: TextProps) {
  return (
    <RNText
      style={[
        styles.base,
        variant && styles[variant],
        fontSize !== undefined && { fontSize },
        fontWeight && { fontWeight },
        italic && { fontStyle: "italic" },
        color && { color },
        align && { textAlign: align },
        lineHeight !== undefined && { lineHeight },
        marginBottom !== undefined && { marginBottom },
        marginTop !== undefined && { marginTop },
        style,
      ]}
      {...props}
    >
      {children}
    </RNText>
  );
}

const styles = StyleSheet.create({
  base: {
    fontSize: 16,
    color: "#000000",
  },
  heading1: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 8,
  },
  heading2: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 6,
  },
  heading3: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 4,
  },
  body: {
    fontSize: 16,
    lineHeight: 24,
  },
  caption: {
    fontSize: 14,
    color: "#666666",
  },
});

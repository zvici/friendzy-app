import { IconNames } from "@/assets/svg";
import Icon from "@/components/ui/icon";
import colors from "@/constants/colors";
import React from "react";
import {
  ActivityIndicator,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";

type IconPosition = "left" | "right";
type ButtonVariant =
  | "primary"
  | "secondary"
  | "outline"
  | "ghost"
  | "link"
  | "danger";

interface ButtonProps {
  children?: React.ReactNode;
  onPress?: () => void;
  variant?: ButtonVariant;
  block?: boolean;
  icon?: IconNames;
  iconPosition?: IconPosition;
  disabled?: boolean;
  loading?: boolean;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  accessibilityLabel?: string;
  marginBottom?: number;
  marginTop?: number;
  marginLeft?: number;
  marginRight?: number;
}

const Button = ({
  children,
  onPress,
  variant = "primary",
  block = false,
  icon,
  iconPosition = "left",
  disabled = false,
  loading = false,
  style,
  textStyle,
  accessibilityLabel,
  marginBottom,
  marginTop,
  marginLeft,
  marginRight,
}: ButtonProps) => {
  const getButtonStyle = () => {
    const buttonStyles: StyleProp<ViewStyle>[] = [styles.button];

    // Add variant styles
    switch (variant) {
      case "primary":
        buttonStyles.push(styles.primaryButton);
        break;
      case "secondary":
        buttonStyles.push(styles.secondaryButton);
        break;
      case "outline":
        buttonStyles.push(styles.outlineButton);
        break;
      case "ghost":
        buttonStyles.push(styles.ghostButton);
        break;
      case "link":
        buttonStyles.push(styles.linkButton);
        break;
      case "danger":
        buttonStyles.push(styles.dangerButton);
        break;
    }

    // Add block style
    if (block) {
      buttonStyles.push(styles.blockButton);
    }

    // Add disabled style
    if (disabled || loading) {
      buttonStyles.push(styles.disabledButton);
    }
    // Add margin styles
    if (marginBottom !== undefined) {
      buttonStyles.push({ marginBottom });
    }
    if (marginTop !== undefined) {
      buttonStyles.push({ marginTop });
    }
    if (marginLeft !== undefined) {
      buttonStyles.push({ marginLeft });
    }
    if (marginRight !== undefined) {
      buttonStyles.push({ marginRight });
    }

    return buttonStyles;
  };

  const getTextStyle = () => {
    const textStyles: StyleProp<TextStyle>[] = [styles.text];

    // Add variant text styles
    switch (variant) {
      case "primary":
        textStyles.push(styles.primaryText);
        break;
      case "secondary":
        textStyles.push(styles.secondaryText);
        break;
      case "outline":
        textStyles.push(styles.outlineText);
        break;
      case "ghost":
        textStyles.push(styles.ghostText);
        break;
      case "link":
        textStyles.push(styles.linkText);
        break;
      case "danger":
        textStyles.push(styles.dangerText);
        break;
    }

    // Add disabled text style
    if (disabled || loading) {
      textStyles.push(styles.disabledText);
    }

    return textStyles;
  };

  const renderContent = () => {
    if (loading) {
      return (
        <ActivityIndicator
          size="small"
          color={
            variant === "outline" || variant === "ghost" || variant === "link"
              ? "#0070f3"
              : "#ffffff"
          }
        />
      );
    }

    const buttonText =
      typeof children === "string" ? (
        <Text style={[getTextStyle(), textStyle]}>{children}</Text>
      ) : (
        children
      );

    if (icon) {
      return (
        <View style={styles.contentContainer}>
          <View
            style={[
              styles.iconContainer,
              {
                left: iconPosition === "left" ? 0 : undefined,
                right: iconPosition === "right" ? 0 : undefined,
              },
            ]}
          >
            <Icon name={icon} size={24} />
          </View>
          {buttonText}
        </View>
      );
    }

    return buttonText;
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled || loading}
      style={[getButtonStyle(), style]}
      activeOpacity={0.7}
      accessibilityLabel={accessibilityLabel}
    >
      {renderContent()}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 8,
    paddingVertical: 8,
    borderRadius: 32,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    minHeight: 56,
  },
  primaryButton: {
    backgroundColor: colors.light.primary,
  },
  secondaryButton: {
    backgroundColor: colors.light.secondary,
  },
  outlineButton: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "#0070f3",
  },
  ghostButton: {
    backgroundColor: "transparent",
  },
  linkButton: {
    backgroundColor: "transparent",
    paddingHorizontal: 0,
    paddingVertical: 0,
    minHeight: 20,
  },
  dangerButton: {
    backgroundColor: "#ff4d4f",
  },
  blockButton: {
    width: "100%",
  },
  disabledButton: {
    opacity: 0.5,
  },
  contentContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    position: "relative",
  },
  iconContainer: {
    backgroundColor: "#ffffff",
    height: 40,
    width: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  primaryText: {
    color: "#ffffff",
  },
  secondaryText: {
    color: "#333333",
  },
  outlineText: {
    color: "#0070f3",
  },
  ghostText: {
    color: "#0070f3",
  },
  linkText: {
    color: colors.light.primary,
  },
  dangerText: {
    color: "#ffffff",
  },
  disabledText: {
    color: "#999999",
  },
});

export default Button;

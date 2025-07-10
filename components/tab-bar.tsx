import { IconNames } from "@/assets/svg";
import Icon from "@/components/ui/icon";
import { View } from "@/components/ui/view";
import colors from "@/constants/colors";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { useEffect } from "react";
import { Dimensions, StyleSheet, TouchableOpacity } from "react-native";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const screenWidth = Dimensions.get("window").width;

interface TabBarProps extends BottomTabBarProps {
  visible?: boolean;
}

export default function TabBar(props: TabBarProps) {
  const { state, navigation, descriptors } = props;
  const insets = useSafeAreaInsets();

  const backgroundLeft = useSharedValue(15);

  useEffect(() => {
    backgroundLeft.value = withTiming(
      ((screenWidth - 28) / 4) * state.index + 15,
      {
        duration: 300,
        easing: Easing.inOut(Easing.ease),
      }
    );
  }, [state.index]);

  const animatedBackgroundButtonStyle = useAnimatedStyle(() => {
    return {
      left: backgroundLeft.value,
    };
  });

  return (
    <View
      style={[
        styles.tabbar,
        {
          marginBottom: insets.bottom,
        },
      ]}
    >
      <Animated.View
        style={[styles.backgroundButton, animatedBackgroundButtonStyle]}
      />
      {state.routes.map((route, index) => {
        const isFocused = state.index === index;
        // Map route names to valid icon names
        const getIconName = (routeName: string): IconNames => {
          switch (routeName) {
            case "Home":
              return "home";
            default:
              return "home"; // Provide a default icon
          }
        };
        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };
        return (
          <TouchableOpacity key={index} onPress={onPress}>
            <Icon
              name={getIconName(route.name)}
              variant={isFocused ? "bold" : "outline"}
            />
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  tabbar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 64,
    backgroundColor: "#fff",
    paddingHorizontal: 24,
    marginHorizontal: 24,
    borderRadius: 40,
    shadowColor: colors.light.secondary,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 6,
    position: "relative",
  },
  backgroundButton: {
    position: "absolute",
    height: 40,
    width: 40,
    backgroundColor: colors.light.primary,
    borderRadius: 40,
    zIndex: -1,
  },
});

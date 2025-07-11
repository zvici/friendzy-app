import { IconNames } from "@/assets/svg";
import Icon from "@/components/ui/icon";
import View from "@/components/ui/view";
import colors from "@/constants/colors";
import { LAYOUT } from "@/constants/layout";
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

  const backgroundLeft = useSharedValue(0);

  const totalRoutes = state.routes.length;
  const oneRouteWidth = (screenWidth - 48) / totalRoutes;

  useEffect(() => {
    backgroundLeft.value = withTiming(
      oneRouteWidth * state.index + (oneRouteWidth / 2 - 20),
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
          <TouchableOpacity key={index} onPress={onPress} style={styles.button}>
            <Icon
              name={route.name as IconNames}
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
    height: LAYOUT.TAB_BAR_HEIGHT,
    backgroundColor: "#fff",
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
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
  backgroundButton: {
    position: "absolute",
    height: 40,
    width: 40,
    backgroundColor: colors.light.primary,
    borderRadius: 40,
    zIndex: -1,
  },
  button: {
    flex: 1,
    height: 64,
    justifyContent: "center",
    alignItems: "center",
  },
});

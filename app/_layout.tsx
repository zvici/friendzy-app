import { Stack } from "expo-router";

export const unstable_settings = {
  initialRouteName: "sign-in",
};

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="sign-in"
        options={{ headerShown: false, animation: "fade" }}
      />
      <Stack.Screen
        name="(tabs)"
        options={{ headerShown: false, animation: "fade" }}
      />
    </Stack>
  );
}

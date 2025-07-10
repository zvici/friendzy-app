import { Redirect } from "expo-router";

export default function Index() {
  const authenticated = false;
  if (!authenticated) {
    return <Redirect href="/sign-in" />;
  }

  return <Redirect href="/(tabs)/home" />;
}

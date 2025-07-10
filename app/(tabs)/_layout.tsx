import { TabBar } from "@/components";
import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs tabBar={(props) => <TabBar {...props} />}>
      <Tabs.Screen name="home" options={{ headerShown: false }} />
      <Tabs.Screen name="discover" options={{ headerShown: false }} />
      <Tabs.Screen name="matches" options={{ headerShown: false }} />
      <Tabs.Screen name="messages" options={{ headerShown: false }} />
    </Tabs>
  );
}

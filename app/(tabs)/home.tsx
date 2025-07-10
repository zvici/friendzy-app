import { Button, Text, View } from "@/components";
import { useRouter } from "expo-router";

export default function HomeScreen() {
  const router = useRouter();
  const handleLogout = () => {
    router.push("/sign-in"); // Redirect to sign-in screen after logout
  };

  return (
    <View center flex={1}>
      <Text align="center" variant="heading3" marginBottom={16}>
        Welcome to the Home Screen! This is a placeholder for your content.
      </Text>
      <Button onPress={handleLogout}>Logout</Button>
    </View>
  );
}

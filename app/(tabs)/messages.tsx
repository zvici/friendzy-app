import { Container, IconButton, TopBar } from "@/components";
import { useRouter } from "expo-router";

export default function MessagesScreen() {
  const router = useRouter();
  const handleNotificationPress = () => {
    router.push("/sign-in");
  };
  return (
    <Container>
      <TopBar
        title="Messages"
        rightButton={
          <IconButton name="bell" onPress={handleNotificationPress} />
        }
      />
    </Container>
  );
}

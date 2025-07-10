import { Button, Container, Image, Text, View } from "@/components";
import { useRouter } from "expo-router";

export default function SignInScreen() {
  const router = useRouter();

  const handleLogin = () => {
    router.push("/(tabs)/home");
  };

  return (
    <Container centered padding={32}>
      <Image
        source={require("@/assets/images/sign-in.png")}
        height={300}
        width={"100%"}
        resizeMode="contain"
        marginBottom={66}
      />
      <Text variant="heading3" align="center" marginBottom={32}>
        Let’s meeting new people around you
      </Text>
      <Button icon="phone" block marginBottom={16} onPress={handleLogin}>
        Login with Phone
      </Button>
      <Button
        icon="google"
        variant="secondary"
        block
        marginBottom={32}
        onPress={handleLogin}
      >
        Login with Google
      </Button>
      <View row justifyContent="center">
        <Text>Don&apos;t have an account?</Text>
        <Button
          variant="link"
          onPress={() => console.log("Sign Up Pressed")}
          marginLeft={2}
        >
          Sign Up
        </Button>
      </View>
    </Container>
  );
}

import { Container, IconButton, TopBar } from "@/components";

export default function DiscoverScreen() {
  return (
    <Container>
      <TopBar title="Discover" rightButton={<IconButton name="bell" />} />
    </Container>
  );
}

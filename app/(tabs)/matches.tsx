import { Container, IconButton, TopBar } from "@/components";

export default function MatchesScreen() {
  return (
    <Container>
      <TopBar title="Matches" rightButton={<IconButton name="bell" />} />
    </Container>
  );
}

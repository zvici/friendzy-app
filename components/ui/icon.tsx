import {
  DiscoverIcon,
  GoogleIcon,
  HomeIcon,
  IconNames,
  MatchesIcon,
  MessagesIcon,
  PhoneIcon,
} from "@/assets/svg";

interface Props {
  name: IconNames;
  size?: number;
  variant?: "bold" | "outline";
}

export default function Icon(props: Props) {
  const { name, size = 24, variant = "outline" } = props;

  switch (name) {
    case "phone":
      return <PhoneIcon width={size} />;
    case "google":
      return <GoogleIcon width={size} />;
    case "home":
      return <HomeIcon width={size} variant={variant} />;
    case "discover":
      return <DiscoverIcon width={size} variant={variant} />;
    case "messages":
      return <MessagesIcon width={size} variant={variant} />;
    case "matches":
      return <MatchesIcon width={size} variant={variant} />;
    default:
      return null;
  }
}

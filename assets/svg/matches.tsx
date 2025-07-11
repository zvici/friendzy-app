import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

interface Props extends SvgProps {
  variant?: "bold" | "outline";
}

export default function MatchesIcon(props: Props) {
  const { variant = "outline", ...restProps } = props;

  switch (variant) {
    case "bold":
      return (
        <Svg width={24} height={24} fill="none" {...restProps}>
          <Path
            fill="#fff"
            d="M10.8 7.2a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0Zm9.6 0a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0Zm-4.884 13.2a8.6 8.6 0 0 0 .084-1.2 8.364 8.364 0 0 0-1.8-5.196 6 6 0 0 1 9 5.196v1.2h-7.284ZM7.2 13.2a6 6 0 0 1 6 6v1.2h-12v-1.2a6 6 0 0 1 6-6Z"
          />
        </Svg>
      );
    case "outline":
    default:
      return (
        <Svg width={24} height={24} fill="none" {...restProps}>
          <Path
            stroke="#4B164C"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 4.354a4 4 0 1 1 0 5.292M15 21H3v-1a6 6 0 1 1 12 0v1Zm0 0h6v-1a6 6 0 0 0-9-5.197M13 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"
          />
        </Svg>
      );
  }
}

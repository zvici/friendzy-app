import * as React from "react";
import Svg, { ClipPath, Defs, G, Path, SvgProps } from "react-native-svg";

interface Props extends SvgProps {
  variant?: "bold" | "outline";
}

export default function DiscoverIcon(props: Props) {
  const { variant = "outline", ...restProps } = props;

  switch (variant) {
    case "bold":
      return (
        <Svg width={24} height={24} fill="none" {...restProps}>
          <G
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            clipPath="url(#a)"
          >
            <Path
              fill="#fff"
              stroke="#fff"
              d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z"
            />
            <Path fill="#DD88CF" stroke="#DD88CF" d="m8 16 2-6 6-2-2 6-6 2Z" />
          </G>
          <Defs>
            <ClipPath id="a">
              <Path fill="#fff" d="M0 0h24v24H0z" />
            </ClipPath>
          </Defs>
        </Svg>
      );
    case "outline":
    default:
      return (
        <Svg width={24} height={24} fill="none" {...restProps}>
          <G
            stroke="#4B164C"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            clipPath="url(#a)"
          >
            <Path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z" />
            <Path d="m8 16 2-6 6-2-2 6-6 2Z" />
          </G>
          <Defs>
            <ClipPath id="a">
              <Path fill="#fff" d="M0 0h24v24H0z" />
            </ClipPath>
          </Defs>
        </Svg>
      );
  }
}

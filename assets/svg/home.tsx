import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

interface Props extends SvgProps {
  variant?: "bold" | "outline";
}

export default function GoogleIcon(props: Props) {
  const { variant = "outline", ...restProps } = props;

  switch (variant) {
    case "bold":
      return (
        <Svg width={24} height={24} fill="none" {...props}>
          <Path
            fill="#fff"
            d="m12 3-8 7v10c0 .265.12.52.335.707.214.188.505.293.808.293H8.57c.304 0 .594-.105.809-.293A.941.941 0 0 0 9.714 20v-4c0-.265.12-.52.335-.707a1.23 1.23 0 0 1 .808-.293h2.286c.303 0 .594.105.808.293a.941.941 0 0 1 .335.707v4c0 .265.12.52.334.707.215.188.506.293.809.293h3.428c.303 0 .594-.105.808-.293A.941.941 0 0 0 20 20V10l-8-7Z"
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
            d="m12 3-8 7v10c0 .265.12.52.335.707.214.188.505.293.808.293H8.57c.304 0 .594-.105.809-.293A.941.941 0 0 0 9.714 20v-4c0-.265.12-.52.335-.707a1.23 1.23 0 0 1 .808-.293h2.286c.303 0 .594.105.808.293a.941.941 0 0 1 .335.707v4c0 .265.12.52.335.707.214.188.505.293.808.293h3.428c.303 0 .594-.105.808-.293A.941.941 0 0 0 20 20V10l-8-7Z"
          />
        </Svg>
      );
  }
}

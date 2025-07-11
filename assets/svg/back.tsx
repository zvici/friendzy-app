import Svg, { ClipPath, Defs, G, Path, SvgProps } from "react-native-svg";

export default function BackIcon(props: SvgProps) {
  return (
    <Svg width={24} height={24} fill="none" {...props}>
      <G clipPath="url(#a)">
        <Path
          stroke="#22172A"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="m15 6-6 6 6 6"
        />
      </G>
      <Defs>
        <ClipPath id="a">
          <Path fill="#fff" d="M0 0h24v24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

import Svg, {
    Circle,
    ClipPath,
    Defs,
    G,
    Path,
    SvgProps,
} from "react-native-svg";

export default function BellIcon(props: SvgProps) {
  return (
    <Svg width={24} height={24} fill="none" {...props}>
      <G strokeWidth={1.5} clipPath="url(#a)">
        <Path
          stroke="#4B164C"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10 5a2 2 0 1 1 4 0 7 7 0 0 1 4 6v3a4 4 0 0 0 2 3H4a4 4 0 0 0 2-3v-3a7 7 0 0 1 4-6M9 17v1a3 3 0 0 0 6 0v-1"
        />
        <Circle cx={18} cy={6} r={3.25} fill="#DD88CF" stroke="#fff" />
      </G>
      <Defs>
        <ClipPath id="a">
          <Path fill="#fff" d="M0 0h24v24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

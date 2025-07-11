import { Image as ExpoImage } from "expo-image";
import { StyleSheet } from "react-native";

type ImageProps = React.ComponentProps<typeof ExpoImage> & {
  width?: number | string;
  height?: number | string;
  marginBottom?: number;
  marginTop?: number;
};

export default function Image({ width, height, style, ...props }: ImageProps) {
  const imageStyle = StyleSheet.create({
    image: {
      width: width as any,
      height: height as any,
      marginBottom: props.marginBottom,
      marginTop: props.marginTop,
    },
  });

  return <ExpoImage style={[imageStyle.image, style]} {...props} />;
}

import { useEffect, useState } from "react";
import { Dimensions, PixelRatio } from "react-native";

const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;

export function useResponsive() {
  const [dims, setDims] = useState(Dimensions.get("window"));

  useEffect(() => {
    const handler = ({ window }) => setDims(window);
    const subscription = Dimensions.addEventListener
      ? Dimensions.addEventListener("change", handler)
      : null;
    if (!subscription) Dimensions.addEventListener("change", handler);
    return () => {
      if (subscription && subscription.remove) subscription.remove();
      else Dimensions.removeEventListener("change", handler);
    };
  }, []);

  const { width, height } = dims;
  const isLandscape = width > height;
  const scale = width / guidelineBaseWidth;
  const verticalScale = height / guidelineBaseHeight;

  const scaleSize = (size) => Math.round(PixelRatio.roundToNearestPixel(size * scale));
  const scaleFont = (size) =>
    Math.round(PixelRatio.roundToNearestPixel(size * Math.min(scale, verticalScale)));

  return { width, height, isLandscape, scale, verticalScale, scaleSize, scaleFont };
}
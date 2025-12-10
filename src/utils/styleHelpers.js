import React from "react";
import { useResponsive } from "./responsive";

// Hook to create responsive styles from a factory function
export function useScaledStyles(makeStyles) {
  const { scaleSize, scaleFont } = useResponsive();
  const deps = [scaleSize, scaleFont];
  return React.useMemo(() => makeStyles({ scaleSize, scaleFont }), deps);
}

export default useScaledStyles;

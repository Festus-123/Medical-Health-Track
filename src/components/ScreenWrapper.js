import React from "react";
import { SafeAreaView, View, ScrollView, StyleSheet } from "react-native";
import { useResponsive } from "../utils/responsive";

const ScreenWrapper = ({
  children,
  scroll = false,
  noPadding = false,
  style,
}) => {
  const { scaleSize } = useResponsive();
  const padding = noPadding ? 0 : scaleSize(16);
  const Container = scroll ? ScrollView : View;

  if (scroll) {
    return (
      <SafeAreaView style={styles.safe}>
        <Container
          contentContainerStyle={[styles.container, { padding }, style]}
        >
          {children}
        </Container>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.safe}>
      <Container style={[styles.container, { padding }, style]}>
        {children}
      </Container>
    </SafeAreaView>
  );
};

export default ScreenWrapper;

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: "#fff" },
  container: { flexGrow: 1 },
});

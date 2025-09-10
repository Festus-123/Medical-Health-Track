import { View, Text, Image, Button, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Image source={require("../assets/aeiro.png")} style={{ width: 300, height: 100 }} />
      <Text>Welcome to the aero-line of state express</Text>
      {/* <Button title="Go to Details" onPress={() => router.push("/details")} /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

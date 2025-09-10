import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Alert } from "react-native";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNo, setPhoneNo] = useState("");

  const handlesignup = () => {
    if (email === "test@example.com" && password === "123456"  && phoneNo === "08140809527") {
      Alert.alert("✅ Success", "You are signed up! successfull...");
    } else {
      Alert.alert("❌ Error", "Invalid email or password or phone No");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>SignUp</Text>

      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        autoCapitalize="none"
        keyboardType="email-address"
      />

      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        style={styles.input}
        secureTextEntry
      />

      <TextInput
        placeholder="phone number"
        value={phoneNo}
        onChangeText={setPhoneNo}
        style={styles.input}
        keyboardType="tel-no"
      />

      <Button title="SignUp" onPress={handlesignup} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
  heading: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: "center",
    fontWeight: "bold",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
  },
});

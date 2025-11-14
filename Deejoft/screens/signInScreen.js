// import React, { useState, useEffect } from "react";
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   StyleSheet,
//   SafeAreaView,
//   Vibration,
// } from "react-native";
// import { LinearGradient } from "expo-linear-gradient";
// import { Ionicons } from "@expo/vector-icons";
// import AsyncStorage from "@react-native-async-storage/async-storage";

// export default function SignInScreen({ navigation }) {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [rememberMe, setRememberMe] = useState(false);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     const loadUser = async () => {
//       try {
//         const savedUser = await AsyncStorage.getItem("rememberedUser");
//         if (savedUser) {
//           const { username, password } = JSON.parse(savedUser);
//           setUsername(username);
//           setPassword(password);
//           setRememberMe(true);
//         }
//       } catch (err) {
//         console.log("Error loading saved user:", err);
//       }
//     };
//     loadUser();
//   }, []);

//   const handleLogin = async () => {
//     try {
//       const userData = await AsyncStorage.getItem("user");
//       if (userData) {
//         const { username: savedUser, password: savedPass } = JSON.parse(userData);

//         if (username === savedUser && password === savedPass) {
//           setError("");

//           if (rememberMe) {
//             await AsyncStorage.setItem("rememberedUser", JSON.stringify({ username, password }));
//           } else {
//             await AsyncStorage.removeItem("rememberedUser");
//           }

//           navigation.navigate("Home");
//         } else {
//           Vibration.vibrate(300);
//           setError("Invalid username or password");
//         }
//       } else {
//         Vibration.vibrate(300);
//         setError("No account found. Please sign up.");
//       }
//     } catch (err) {
//       Vibration.vibrate(300);
//       setError("Something went wrong.");
//     }
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       <Text style={styles.title}>Welcome Back 👋</Text>
//       <Text style={styles.subtitle}>Log in to your account</Text>

//       {/* Username */}
//       <View style={styles.inputContainer}>
//         <Ionicons name="person-outline" size={20} color="gray" style={styles.icon} />
//         <TextInput
//           style={styles.input}
//           placeholder="Username"
//           value={username}
//           onChangeText={setUsername}
//         />
//       </View>

//       {/* Password */}
//       <View style={styles.inputContainer}>
//         <Ionicons name="lock-closed-outline" size={20} color="gray" style={styles.icon} />
//         <TextInput
//           style={styles.input}
//           placeholder="Password"
//           secureTextEntry
//           value={password}
//           onChangeText={setPassword}
//         />
//       </View>

//       {/* Remember Me */}
//       <TouchableOpacity
//         style={styles.rememberContainer}
//         onPress={() => setRememberMe(!rememberMe)}
//       >
//         <Ionicons
//           name={rememberMe ? "checkbox-outline" : "square-outline"}
//           size={20}
//           color="#ff7e5f"
//         />
//         <Text style={styles.rememberText}>Remember Me</Text>
//       </TouchableOpacity>

//       {/* Error */}
//       {error ? <Text style={styles.error}>{error}</Text> : null}

//       {/* Login */}
//       <TouchableOpacity style={{ marginTop: 20 }} onPress={handleLogin}>
//         <LinearGradient colors={["#ff7e5f", "#feb47b"]} style={styles.button}>
//           <Text style={styles.buttonText}>Log In</Text>
//         </LinearGradient>
//       </TouchableOpacity>

//       {/* Footer */}
//       <View style={styles.footer}>
//         <Text style={styles.footerText}>Don’t have an account? </Text>
//         <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
//           <Text style={styles.signUp}>Sign up</Text>
//         </TouchableOpacity>
//       </View>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, backgroundColor: "#fff", padding: 20, marginTop: 50, gap: 25 },
//   title: { fontSize: 24, fontWeight: "bold", marginBottom: 5, textAlign: "center" },
//   subtitle: { fontSize: 14, color: "gray", textAlign: "center", marginBottom: 20 },
//   inputContainer: {
//     flexDirection: "row",
//     alignItems: "center",
//     borderBottomWidth: 2,
//     borderColor: "#ccc",
//     marginTop: 10,
//     paddingVertical: 5,
//   },
//   icon: { marginRight: 10 },
//   input: { flex: 1, paddingVertical: 8, fontSize: 16 },
//   rememberContainer: { flexDirection: "row", alignItems: "center", marginTop: 15 },
//   rememberText: { marginLeft: 8, color: "#555" },
//   button: { paddingVertical: 15, borderRadius: 8, alignItems: "center" },
//   buttonText: { color: "#fff", fontSize: 18, fontWeight: "bold" },
//   footer: { flexDirection: "row", justifyContent: "center", marginTop: 30 },
//   footerText: { fontSize: 14, color: "#555" },
//   signUp: { fontSize: 14, color: "#ff7e5f", fontWeight: "bold" },
//   error: { color: "red", textAlign: "center", marginTop: 10 },
// });

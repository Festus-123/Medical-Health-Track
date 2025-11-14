import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <Text style={styles.title}>Choose Your Vacation Plan ✈️</Text>
        <Text style={styles.subtitle}>Find your perfect escape</Text>

        {/* Featured Image Placeholder */}
        <View style={styles.imageBox}>
          <Text style={{ color: "#888" }}>🏝️ Featured Destination Image</Text>
        </View>

        {/* Categories */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Categories</Text>

          <View style={styles.categories}>
            <TouchableOpacity style={styles.card}>
              <Ionicons name="airplane-outline" size={32} color="#ff7e5f" />
              <Text style={styles.cardText}>Flights</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.card}>
              <MaterialCommunityIcons name="beach" size={32} color="#feb47b" />
              <Text style={styles.cardText}>Beaches</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.card}>
              <Ionicons name="home-outline" size={32} color="#4facfe" />
              <Text style={styles.cardText}>Hotels</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.card}>
              <Ionicons name="restaurant-outline" size={32} color="#43e97b" />
              <Text style={styles.cardText}>Food</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Popular Plans */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Popular Plans</Text>

          <TouchableOpacity style={styles.planCard}>
            <Image
              source={{ uri: "https://picsum.photos/400/200" }}
              style={styles.planImage}
            />
            <View style={styles.planInfo}>
              <Text style={styles.planTitle}>Maldives Escape</Text>
              <Text style={styles.planSubtitle}>7 nights • All Inclusive</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.planCard}>
            <Image
              source={{ uri: "https://picsum.photos/401/200" }}
              style={styles.planImage}
            />
            <View style={styles.planInfo}>
              <Text style={styles.planTitle}>Paris Getaway</Text>
              <Text style={styles.planSubtitle}>5 nights • City Tour</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
    marginTop: 40,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 10,
  },
  subtitle: {
    fontSize: 14,
    textAlign: "center",
    color: "gray",
    marginBottom: 20,
  },
  imageBox: {
    height: 180,
    backgroundColor: "#f2f2f2",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 25,
  },
  section: {
    marginBottom: 25,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 15,
  },
  categories: {
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  card: {
    width: "45%",
    backgroundColor: "#f9f9f9",
    borderRadius: 12,
    padding: 20,
    alignItems: "center",
    marginBottom: 15,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  cardText: {
    marginTop: 10,
    fontSize: 14,
    fontWeight: "500",
  },
  planCard: {
    marginBottom: 20,
    borderRadius: 12,
    backgroundColor: "#f9f9f9",
    overflow: "hidden",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  planImage: {
    width: "100%",
    height: 150,
  },
  planInfo: {
    padding: 10,
  },
  planTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  planSubtitle: {
    fontSize: 13,
    color: "gray",
  },
});

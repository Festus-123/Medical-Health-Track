import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const AllergyCard = ({ title, symptoms }) => {
  return (
    <View style={styles.container}>
      <Ionicons />
      <View>
        <Text>{title}</Text>
        <Text>{symptoms}</Text>
      </View>
    </View>
  );
};

export default AllergyCard;

const styles = StyleSheet.create({});

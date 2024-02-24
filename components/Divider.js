// Divider.js
import React from "react";
import { View, StyleSheet } from "react-native";

const Divider = () => {
  return <View style={styles.divider} />;
};

const styles = StyleSheet.create({
  divider: {
    borderBottomColor: "lightgrey",
    borderBottomWidth: 25,
    marginVertical: -12,
  },
});

export default Divider;

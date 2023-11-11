import React from "react";
import { StyleSheet, Text } from "react-native";

function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    textAlign: "center",
    borderColor: "#ddb52f",
    borderWidth: 3,
    color: "#ddb52f",
    padding: 20,
    backgroundColor: "white",
  },
});

import { Text, StyleSheet, Pressable, View } from "react-native";

const PrimaryButton = ({ children, onPress }) => {
  return (
    <View style={styles.buttonContainer}>
      <Pressable
        android_ripple={{ color: "#511c51" }}
        style={styles.button}
        onPress={onPress}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    width: "100%",
    overflow: "hidden", // Clip the ripple effect
  },
  button: {
    paddingVertical: 10,
    backgroundColor: "#642364",
    marginTop: 10,
    borderRadius: 20, // Add the border radius to the button style
  },
  buttonText: {
    color: "#e9d1d1",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default PrimaryButton;

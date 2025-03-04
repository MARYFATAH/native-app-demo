import { Text, Pressable, StyleSheet } from "react-native";

export default function Button({ onPress, title, color = "orange" }) {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.button,
        { backgroundColor: color },
        pressed && styles.buttonActive,
      ]}
      onPress={onPress}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </Pressable>
  );
}
const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    minWidth: 200,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 6,
  },
  buttonActive: {
    backgroundColor: "purple",
  },
  buttonText: {
    color: "white",
    fontSize: 20,
  },
});

import { Image, View, Text, StyleSheet } from "react-native";
import logo from "../../assets/images/react-logo.png";

export default function RotatePage() {
  return (
    <View style={styles.contentContainer}>
      <Text>Rotate</Text>
      <Image style={{ width: 200, height: 200 }} source={logo} />
    </View>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 12,
    gap: 12,
  },
});

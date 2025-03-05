import { View, Text, StyleSheet, Button } from "react-native";
import { CameraView, useCameraPermissions } from "expo-camera";
import { useState } from "react";
export default function CameraPage() {
  const [permission, requestPermission] = useCameraPermissions();
  const [facing, setFacing] = useState("back");

  if (!permission) {
    // Camera permissions are still loading.
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <View style={styles.container}>
        <Text style={styles.message}>
          We need your permission to show the camera
        </Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <Text>Camera</Text>
      <CameraView style={styles.camera} facing={facing} />
      <Button
        style={styles.button}
        title="flip camera"
        onPress={() => setFacing(facing === "front" ? "back" : "front")}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 12,
  },
  camera: {
    flex: 1,
    width: "100%",
    height: 200,
  },
});

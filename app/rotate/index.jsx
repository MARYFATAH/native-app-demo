import React from "react";
import { Image, View, Text, StyleSheet } from "react-native";
import logo from "../../assets/images/react-logo.png";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
} from "react-native-reanimated";

export default function RotatePage() {
  const rotation = useSharedValue(0);
  const savedRotation = useSharedValue(0);

  const rotationGesture = Gesture.Rotation()
    .onUpdate((e) => {
      rotation.value = savedRotation.value + e.rotation;
    })
    .onEnd(() => {
      savedRotation.value = rotation.value;
    });

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ rotateZ: `${rotation.value}rad` }],
  }));

  return (
    <GestureDetector gesture={rotationGesture}>
      <View style={styles.contentContainer}>
        <Text>Rotate</Text>
        <Animated.Image style={[styles.image, animatedStyle]} source={logo} />
      </View>
    </GestureDetector>
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
  image: {
    width: 200,
    height: 200,
  },
});

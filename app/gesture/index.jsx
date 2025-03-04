import { Text, Button, View, StyleSheet } from "react-native";
import { GestureDetector, Gesture } from "react-native-gesture-handler";
import {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import Animated from "react-native-reanimated";

export default function GesturePage() {
  const offset = useSharedValue({ x: 0, y: 0 });
  const start = useSharedValue({ x: 0, y: 0 });

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: offset.value.x },
        { translateY: offset.value.y },
      ],
    };
  });

  const gesture = Gesture.Pan()
    .onUpdate((e) => {
      offset.value = {
        x: e.translationX + start.value.x,
        y: e.translationY + start.value.y,
      };
    })
    .onEnd(() => {
      start.value = {
        x: offset.value.x,
        y: offset.value.y,
      };
    });
  return (
    <View style={styles.container}>
      <GestureDetector gesture={gesture}>
        <Animated.View style={[styles.ball, animatedStyle]} />
        {/* <Button
        title="Animate"
        onPress={() => {
          offset.value = withSpring({ x: 200, y: 200 });
        }}
      /> */}
      </GestureDetector>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  ball: {
    height: 100,
    width: 100,
    backgroundColor: "red",
    borderRadius: "50%",
  },
});

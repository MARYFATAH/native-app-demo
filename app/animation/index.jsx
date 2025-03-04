import { Text, Button, View, StyleSheet } from "react-native";
import Animated, {
  useSharedValue,
  Easing,
  withRepeat,
  withSpring,
  withTiming,
  useAnimatedStyle,
  withDelay,
} from "react-native-reanimated";

export default function Animation() {
  const scale = useSharedValue(1);
  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));
  return (
    <View style={styles.container}>
      <Animated.View style={[styles.box, animatedStyles]} />
      <Button
        onPress={() => {
          scale.value = withTiming(scale.value * 1.5, {
            duration: 1000,
            easing: Easing.elastic(3),
          });
        }}
        title="Animate"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  box: {
    width: 100,
    height: 50,
    backgroundColor: "orange",
  },
});

import { View, Text, StyleSheet } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { useEffect } from "react";

export default function ProgressBar({ percentage = 0, color }) {
  const animatedProgress = useSharedValue(percentage);
  useEffect(() => {
    animatedProgress.value = withSpring(percentage);
  }, [percentage]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      width: `${animatedProgress.value}%`,
    };
  });
  return (
    <View style={styles.progressContainer}>
      <Animated.View
        style={[styles.progressBar, { backgroundColor: color }, animatedStyle]}
      />
      <Text>{percentage}%</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  progressContainer: {
    position: "relative",
    height: 50,
    width: "100%",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
  },
  progressBar: {
    position: "absolute",
    height: "100%",
    top: 0,
    left: 0,
    borderRadius: 6,
    backgroundColor: "green",
  },
});

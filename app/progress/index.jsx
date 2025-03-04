import { View, Text, StyleSheet, Pressable } from "react-native";
import { useState, useEffect } from "react";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

export default function Progress() {
  const [progress, setProgress] = useState(0);
  const animatedProgress = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      width: `${animatedProgress.value}%`,
    };
  });

  useEffect(() => {
    animatedProgress.value = withSpring(progress);
  }, [progress]);

  return (
    <View style={styles.contentContainer}>
      <View style={styles.progressContainer}>
        <Animated.View style={[styles.progressBar, animatedStyle]} />
        <Text>{progress}%</Text>
      </View>
      <Pressable
        style={({ pressed }) => [styles.button, pressed && styles.buttonActive]}
        onPress={() => {
          if (animatedProgress.value <= 90) {
            setProgress(progress + 10);
          }
        }}
      >
        <Text style={styles.buttonText}>+10</Text>
      </Pressable>
      <Pressable
        style={({ pressed }) => [styles.button, pressed && styles.buttonActive]}
        onPress={() => {
          if (animatedProgress.value >= 10) {
            setProgress(progress - 10);
          }
        }}
      >
        <Text style={styles.buttonText}>-10</Text>
      </Pressable>
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
  button: {
    backgroundColor: "blue",
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

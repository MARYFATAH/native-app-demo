import { useState } from "react";
import { Text, Button, View, StyleSheet } from "react-native";
import Animated, {
  useSharedValue,
  withSpring,
  useAnimatedStyle,
} from "react-native-reanimated";

export default function Animation() {
  const [count, setCount] = useState(0);
  const scale = useSharedValue(count);
  const animatedStyles = useAnimatedStyle(() => ({
    width: `${scale.value * 100}%`,
  }));
  return (
    <View style={styles.container}>
      <View style={[styles.progressContainer]}>
        <Animated.View style={[styles.progress, animatedStyles]} />
        <Text>{count}%</Text>
      </View>
      <Button
        onPress={() => {
          if (count <= 90) {
            setCount(count + 10);
            scale.value = withSpring((count + 10) / 100);
          }
        }}
        title="+10"
      />
      <Button
        onPress={() => {
          if (count >= 10) {
            setCount(count - 10);
            scale.value = withSpring((count - 10) / 100);
          }
        }}
        title="-10"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  progressContainer: {
    position: "relative",
    borderColor: "black",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 6,
    width: "100%",
    height: 50,
    padding: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  progress: {
    width: "100%",
    backgroundColor: "orange",
    borderRadius: 6,
    position: "absolute",
    top: 0,
    left: 0,
    height: "100%",
  },
});

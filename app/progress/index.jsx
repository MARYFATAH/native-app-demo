import { View, Text, StyleSheet, Pressable } from "react-native";
import { useState } from "react";
import Button from "@/components/Button";

import ProgressBar from "@/components/ProgressBar";

export default function Progress() {
  const [progress, setProgress] = useState(0);

  return (
    <View style={styles.contentContainer}>
      <ProgressBar percentage={progress} color="black" />
      <ProgressBar percentage={progress} color="hotpink" />
      <Pressable
        onPress={() => {
          console.log("on press");
        }}
        onLongPress={() => {
          console.log("on long press");
        }}
      >
        <Text>Press me long!</Text>
      </Pressable>
      <Button
        title="+10"
        onPress={() => {
          console.log("short press");
          if (progress <= 90) {
            setProgress(progress + 10);
          }
        }}
        onLongPress={() => {
          console.log("long press");
          if (progress <= 80) {
            setProgress(progress + 20);
          }
        }}
      />
      <Button
        title="-10"
        onPress={() => {
          if (progress >= 10) {
            setProgress(progress - 10);
          }
        }}
        color="blue"
      />
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

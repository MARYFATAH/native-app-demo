import { Tabs } from "expo-router";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

export default function RootLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          href: null,
        }}
      />
      <Tabs.Screen
        name="animation/index"
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="animation"
              size={size}
              color={color}
            />
          ),
          title: "Animation",
        }}
      />
      <Tabs.Screen
        name="progress/index"
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome6 name="bars-progress" size={size} color={color} />
          ),
          title: "Progress",
        }}
      />
      <Tabs.Screen
        name="gesture/index"
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="gesture-swipe"
              size={size}
              color={color}
            />
          ),
          title: "Gestures",
        }}
      />
    </Tabs>
  );
}

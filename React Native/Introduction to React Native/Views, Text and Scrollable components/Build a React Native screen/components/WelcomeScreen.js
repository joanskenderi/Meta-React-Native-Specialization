import * as React from "react";
import { View, Text } from "react-native";

export default function WelcomeScreen() {
  return (
    <View style={{ flex: 1 }}>
      <Text
        style={{
          padding: 40,
          fontSize: 30,
          color: "#edefee",
          textAlign: "center",
        }}
      >
        Welcome to Little Lemon
      </Text>
      <Text
        style={{
          fontSize: 24,
          padding: 20,
          marginVertical: 8,
          color: "#edefee",
          textAlign: "center",
        }}
      >
        Little Lemon is a charming neighborhood bistro that serves simple food
        and classic cocktails in a lively but casual environment. We would love
        to hear more about your experience with us!
      </Text>
    </View>
  );
}

import * as React from "react";
import { View, Text } from "react-native";

export default function LittleLemonHeader() {
  return (
    <View style={{ backgroundColor: "#f4ce14" }}>
      <Text
        style={{
          padding: 40,
          fontSize: 30,
          color: "black",
          textAlign: "center",
        }}
      >
        Little Lemon
      </Text>
    </View>
  );
}

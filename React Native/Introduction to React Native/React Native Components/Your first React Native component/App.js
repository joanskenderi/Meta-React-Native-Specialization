import * as React from "react";
import { View } from "react-native";
import LittleLemonFooter from "./components/LittleLemonFooter";
import LittleLemonHeader from "./components/LittleLemonHeader";

export default function App() {
  return (
    <>
      <View
        style={{
          flex: 1,
          backgroundColor: "#495e57",
        }}
      >
        <LittleLemonHeader />
      </View>
      <View style={{ backgroundColor: "#495e57" }}>
        <LittleLemonFooter />
      </View>
    </>
  );
}

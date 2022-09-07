import { SafeAreaView } from "react-native";
import { SignUpScreen } from "./screens";
import { styles } from "./assets/styles/globalStyles";
import React from "react";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <SignUpScreen />
    </SafeAreaView>
  );
}

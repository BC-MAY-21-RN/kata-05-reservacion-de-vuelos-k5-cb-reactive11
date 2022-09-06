import { SafeAreaView } from "react-native";
import { SignUpScreen } from "./screens";
import { styles } from './assets/styles/globalStyles'
import LoginScreen from "./screens/LoginScreen";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <LoginScreen />

    </SafeAreaView>
  );
}

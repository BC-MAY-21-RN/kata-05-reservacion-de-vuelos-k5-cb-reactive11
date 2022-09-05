import { SafeAreaView } from "react-native";
import FlightItem from "./components/FlightItemComponent/index";
import { styles } from './assets/styles/globalStyles'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <FlightItem />
    </SafeAreaView>
  );
}

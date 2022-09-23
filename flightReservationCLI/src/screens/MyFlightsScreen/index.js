import { View, SafeAreaView } from "react-native";
// import { AntDesign } from "@expo/vector-icons";
import { FlightList } from "../../components";
import React from "react";
import styles from "./styles";

const MyFlightsScreen = ({ route, navigation }) => {
  const credentials = route.params;

  return (
    <SafeAreaView style={styles.globalContainer}>
      <View style={styles.mainContainer}>
        <FlightList />
        {/* <AntDesign
          name="pluscircle"
          size={60}
          color="#6170F7"
          style={styles.icon}
        /> */}
      </View>
    </SafeAreaView>
  );
};

export default MyFlightsScreen;

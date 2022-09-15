import { View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { FlightList } from "../../components";
import React from "react";
import styles from "./styles";

const MyFlightsScreen = ({ navigation }) => {
  return (
    <View style={styles.mainContainer}>
      <FlightList />
      <AntDesign
        name="pluscircle"
        size={60}
        color="#6170F7"
        style={styles.icon}
        //onPress= {navigation.navigate("MyFlightsScreen")}
      />
    </View>
  );
};

export default MyFlightsScreen;

import { View, Text } from "react-native";
import styles from "./style";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const FlightItem = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.destination}>
        <View>
          <Text style={styles.destinationText}>MEX</Text>
          <Text style={styles.subText}>Mexico</Text>
        </View>
        <Ionicons name="airplane" size={24} color="#6170F7" />
        <View>
          <Text style={styles.destinationText}>USA</Text>
          <Text style={styles.subText}>Serbia</Text>
        </View>
      </View>
      <View style={styles.date}>
        <Text style={styles.dateText}>September 3, 2020</Text>
        <Text style={styles.dateText}>2 Passengers</Text>
      </View>
    </View>
  );
};

export default FlightItem;

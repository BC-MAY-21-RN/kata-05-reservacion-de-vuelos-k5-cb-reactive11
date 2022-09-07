import { View, Text } from "react-native";
import styles from "./style";
import React from "react";
import { Ionicons } from "@expo/vector-icons";


const FlightItem = ({
  date,
  destLong,
  destShort,
  originLong,
  originShort,
  passengers,
}) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.destination}>
        <View>
          <Text style={[styles.destinationText, { fontFamily: 'avenir-next' }]}>{originShort}</Text>
          <Text style={styles.subText}>{originLong}</Text>
        </View>
        <Ionicons name="airplane" size={24} color="#6170F7" />
        <View style={styles.rightColumn}>
          <Text style={styles.destinationText}>{destShort}</Text>
          <Text style={styles.subText}>{destLong}</Text>
        </View>
      </View>
      <View style={styles.date}>
        <Text style={styles.dateText}>{date}</Text>
        <Text style={styles.dateText}>{passengers} Passengers</Text>
      </View>
    </View>
  );
};

export default FlightItem;

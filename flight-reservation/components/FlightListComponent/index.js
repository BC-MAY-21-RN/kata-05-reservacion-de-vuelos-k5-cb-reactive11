import { FlatList, View } from "react-native";
import FlightItem from "../FlightItemComponent";
import styles from "./styles";
import React from "react";
import DATA from "../../assets/data/DATA.json";

const FlightList = () => {
  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <FlightItem
        originLong={item.originLong}
        originShort={item.originShort}
        destLong={item.destLong}
        destShort={item.destShort}
        date={item.date}
        passengers={item.passengers}
      />
    </View>
  );
  return (
    <View style={styles.listContainer}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default FlightList;

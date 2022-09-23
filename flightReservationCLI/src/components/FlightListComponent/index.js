import { FlatList, View } from "react-native";
import FlightItem from "../../components/FlightItemComponent";
import styles from "./styles";
import React from "react";
import DATA from "../../assets/data/DATA.json";

const FlightList = () => {
  const renderItem = ({ item }) => <FlightItem {...item} />;
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

import { FlatList, View } from "react-native";
import { FlightItem } from "../../components";
import styles from "./styles";
import React from "react";

const data = [
  {
    id: 0,
    originLong: "Los angeles",
    originShort: "LAC",
    destLong: "Caracas",
    destShort: "CAR",
    date: "September 23, 2022",
    passengers: "24",
  },
  {
    id: 1,
    originLong: "Los angeles",
    originShort: "LAC",
    destLong: "Caracas",
    destShort: "CAR",
    date: "September 23, 2022",
    passengers: "24",
  },
  {
    id: 2,
    originLong: "Los angeles",
    originShort: "LAC",
    destLong: "Caracas",
    destShort: "CAR",
    date: "September 23, 2022",
    passengers: "24",
  },
  {
    id: 3,
    originLong: "Los angeles",
    originShort: "LAC",
    destLong: "Caracas",
    destShort: "CAR",
    date: "September 23, 2022",
    passengers: "24",
  },
  {
    id: 4,
    originLong: "Los angeles",
    originShort: "LAC",
    destLong: "Caracas",
    destShort: "CAR",
    date: "September 23, 2022",
    passengers: "24",
  },
  {
    id: 5,
    originLong: "Los angeles",
    originShort: "LAC",
    destLong: "Caracas",
    destShort: "CAR",
    date: "September 23, 2022",
    passengers: "24",
  },
  {
    id: 6,
    originLong: "Los angeles",
    originShort: "LAC",
    destLong: "Caracas",
    destShort: "CAR",
    date: "September 23, 2022",
    passengers: "24",
  },
  {
    id: 7,
    originLong: "Los angeles",
    originShort: "LAC",
    destLong: "Caracas",
    destShort: "CAR",
    date: "September 23, 2022",
    passengers: "24",
  },
  {
    id: 8,
    originLong: "Los angeles",
    originShort: "LAC",
    destLong: "Caracas",
    destShort: "CAR",
    date: "September 23, 2022",
    passengers: "24",
  },
];

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
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default FlightList;

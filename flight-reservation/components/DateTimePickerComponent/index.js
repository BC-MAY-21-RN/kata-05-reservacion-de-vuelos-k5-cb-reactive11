import { View } from "react-native";
import React, { useState } from "react";
import DatePicker from "react-native-modern-datepicker";
import styles from "./styles";

const DatePickerComponent = () => {
  const [date, setDate] = useState("");

  return (
    <View style={styles.container}>
      <DatePicker mode="calendar" onSelectedChange={(date) => setDate(date)} />
    </View>
  );
};

export default DatePickerComponent;

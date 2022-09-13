import React from "react";
import { Text } from "react-native";
import styles from "./styles";

const TitleComponent = ({ title, textColor = "#6270de" }) => {
  return <Text style={[styles(textColor).title]}>{title}</Text>;
};

export default TitleComponent;

import { AntDesign } from "@expo/vector-icons";
import React from "react";
import { styles } from "./styles";
import { Text, TextInput, View } from "react-native";

const TextInputComponent = ({ title, icon, help }) => {
  return (
    <View style={styles.container}>
      <View style={styles.titleSection}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.titleWarning}>*{title}</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} />
        {icon && (
          <AntDesign name={icon} size={24} color="black" style={styles.icon} />
        )}
      </View>
      <Text style={styles.hint}>{help}</Text>
    </View>
  );
};

export default TextInputComponent;

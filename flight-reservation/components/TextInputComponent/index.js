import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { styles } from "./styles";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

const TextInputComponent = ({ title, enablePassword, help, icon }) => {
  const [password, setPassword] = useState(enablePassword);
  const [iconPwd, setIcon] = useState(icon);

  const showPassword = () => {
    setPassword(!password);
    setIcon("eye-outline");
  };
  return (
    <View style={styles.container}>
      <View style={styles.titleSection}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.titleWarning}>*{title}</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} secureTextEntry={password} />
        {icon && (
          <Ionicons
            name={iconPwd}
            size={24}
            color="black"
            style={styles.icon}
            onPress={showPassword}
          />
        )}
      </View>
      <Text style={styles.hint}>{help}</Text>
    </View>
  );
};

export default TextInputComponent;

import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { styles } from "./styles";
import { Text, TextInput, View } from "react-native";

const TextInputComponent = ({
  title,
  enablePassword,
  help,
  keyboardType,
  icon,
  value,
  onChangeText,
}) => {
  const [password, setPassword] = useState(enablePassword);
  const [iconPwd, setIcon] = useState("eye-outline");

  const showPassword = () => {
    setPassword(!password);
    password ? setIcon("eye-off-outline") : setIcon("eye-outline");
  };
  return (
    <View style={styles.container}>
      <View style={styles.titleSection}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.titleWarning}>*{title}</Text>
      </View>
      <View>
        <TextInput
          style={styles.input}
          secureTextEntry={password}
          keyboardType={keyboardType}
          value={value}
          onChangeText={onChangeText}
        />
        {enablePassword && (
          <Ionicons
            name={iconPwd}
            size={24}
            color="grey"
            style={styles.icon}
            onPress={showPassword}
          />
        )}
        {icon && (
          <Ionicons name={icon} size={24} color="grey" style={styles.icon} />
        )}
      </View>
      <Text style={styles.hint}>{help}</Text>
    </View>
  );
};

export default TextInputComponent;

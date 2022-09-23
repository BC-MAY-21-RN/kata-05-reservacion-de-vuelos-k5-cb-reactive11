import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import React from "react";

const ButtonComponent = ({ title, textColor, bgColor, icon, onPress }) => {
  return (
    <View>
      <TouchableOpacity style={[styles(bgColor).container]} onPress={onPress}>
        {/* {icon && <AntDesign name={icon} size={24} color={textColor} />} */}
        <Text style={styles().button}> {title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ButtonComponent;

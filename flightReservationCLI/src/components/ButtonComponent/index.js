import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

const ButtonComponent = ({
  title,
  textColor,
  bgColor,
  icon,
  onPress,
  disabled,
}) => {
  return (
    <View>
      <TouchableOpacity
        style={[styles(bgColor).container]}
        onPress={onPress}
        disabled={disabled}>
        {icon && (
          <FontAwesomeIcon
            style={styles().icon}
            icon={icon}
            size={24}
            color={textColor}
          />
        )}
        <Text style={styles().button}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ButtonComponent;

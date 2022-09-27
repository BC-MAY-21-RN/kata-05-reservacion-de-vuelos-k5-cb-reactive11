import React, { useState } from 'react';
import { styles } from './styles';
import { Text, TextInput, View, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const TextInputComponent = ({
  title,
  enablePassword,
  help,
  keyboardType,
  icon,
  value,
  onChangeText,
  bdColor,
}) => {
  const [password, setPassword] = useState(enablePassword);
  const [iconPwd, setIcon] = useState(faEyeSlash);

  const showPassword = () => {
    setPassword(!password);
    password ? setIcon(faEye) : setIcon(faEyeSlash);
  };
  return (
    <View style={styles().container}>
      <View style={styles().titleSection}>
        <Text style={styles().title}>{title}</Text>
        <Text style={styles().titleWarning}>*{title}</Text>
      </View>
      <View>
        <TextInput
          style={styles(bdColor).input}
          secureTextEntry={password}
          keyboardType={keyboardType}
          value={value}
          onChangeText={onChangeText}
        />
        {enablePassword && (
          <TouchableOpacity style={styles().icon} onPress={showPassword}>
            <FontAwesomeIcon icon={iconPwd} size={24} color={bdColor} />
          </TouchableOpacity>
        )}
        {/* {icon && (
          <Ionicons name={icon} size={24} color="grey" style={styles().icon} />
        )} */}
      </View>
      <Text style={styles().hint}>{help}</Text>
    </View>
  );
};

export default TextInputComponent;

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
  bdColor,
  error,
  validationInput,
  validationError,
  ...rest
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const [password, setPassword] = useState(enablePassword);
  const [iconPwd, setIcon] = useState(faEyeSlash);
  
  const [problem, setProblem] = useState('');

  const showPassword = () => {
    setPassword(!password);
    password ? setIcon(faEye) : setIcon(faEyeSlash);
  };
  return (
    <View style={styles().container}>
      <View style={styles().titleSection}>
        <Text style={styles().title}>{title}</Text>
        <Text style={styles().titleWarning}>{(validationInput) ? '' : problem}</Text>
      </View>
      <View>
        <TextInput
          style={isFocused ? styles('#6170F7').input : styles('grey').input}
          secureTextEntry={password}
          keyboardType={keyboardType}
          onFocus={() => setIsFocused(true)}
          onEndEditing={() => {
            (validationInput) ? setProblem(''): setProblem(validationError)
            setIsFocused(false)
            
          }}
          {...rest}
        />
        {enablePassword && (
          <TouchableOpacity style={styles().icon} onPress={showPassword}>
            <FontAwesomeIcon
              icon={iconPwd}
              size={24}
              color={isFocused ? '#6170F7' : 'grey'}
            />
          </TouchableOpacity>
        )}
      </View>
      <Text style={styles().hint}>{help}</Text>
    </View>
  );
};

export default TextInputComponent;

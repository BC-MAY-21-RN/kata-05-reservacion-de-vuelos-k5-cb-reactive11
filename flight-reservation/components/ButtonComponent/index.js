/* eslint-disable react/prop-types */
import {  View, Text, TouchableOpacity } from 'react-native'
import { styles } from './styles';
import React, {useState} from 'react'
import { AntDesign } from '@expo/vector-icons';

const ButtonComponent = ({title, textColor, bgColor, icon }) => {

  //further hook for onChange implementation
  // const [colorButton, setColorButton] = useState(bgColor)
  return (  
    <View >
      <TouchableOpacity style={[styles(bgColor).container]}>
      {icon && <AntDesign name={icon} size={24} color={textColor} />}
      <Text style={styles().button}> {title}</Text>
    </TouchableOpacity>
    </View>
    
  )
}

export default ButtonComponent

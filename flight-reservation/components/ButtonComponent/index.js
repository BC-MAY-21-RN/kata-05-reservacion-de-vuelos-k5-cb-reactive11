import {  View, Text, TouchableOpacity } from 'react-native'
import { styles } from './styles';
import React from 'react'
import { AntDesign } from '@expo/vector-icons';

const ButtonComponent = ({title, textColor, bgColor, icon }) => {
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

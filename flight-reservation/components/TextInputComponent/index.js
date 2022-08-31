import { Text, TextInput, View } from 'react-native'
import { styles } from './styles'
import React from 'react'

const TextInputComponent = ({title, icon, help}) => {
  return (
    <View style={styles.container}>
      <View style={styles.titleSection}> 
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.titleWarning}>*{title}</Text>
      </View>
      <TextInput style={styles.input}/>
      <Text style={styles.hint}>{help}</Text>
    </View>
  )
}

export default TextInputComponent

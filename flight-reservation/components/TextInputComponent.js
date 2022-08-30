import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const TextInputComponent = ({title, icon, hint}) => {
  return (
    <View style={styles.container}>
      <View style={styles.titleSection}> 
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.titleWarning}>*{title}</Text>
      </View>
      <TextInput style={styles.input}/>
      <Text style={styles.hint}>{hint}</Text>
    </View>
  )
}

export default TextInputComponent

const styles = StyleSheet.create({
  container: {
    marginBottom:10,
  },
  titleSection:{
    flexDirection: 'row',
    paddingBottom:5,
  },
  title: {
    color: 'grey',
    fontSize: 16
  },
  titleWarning: {
    color: 'red',
    fontSize: 16,
    fontWeight: '300'
  },
  input: {
    borderWidth: 1, 
    borderColor: 'grey',
    height: 45,
    
  },
  hint: {
    color: 'grey',
    textAlign: 'justify',
    fontWeight: '300',
    fontSize: 13
  },
  
})
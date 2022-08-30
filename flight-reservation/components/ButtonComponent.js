import { Button, StyleSheet, Text, View } from 'react-native'
import React, {useState} from 'react'
import { AntDesign } from '@expo/vector-icons';

const ButtonComponent = ({title, textColor, bgColor, icon }) => {

  //
  const [colorButton, setColorButton] = useState(bgColor)
  return (
    <View style={[{backgroundColor: colorButton}, styles.container]}>
      {icon && <AntDesign name={icon} size={24} color={textColor} /> }
      <Button  title={title} color={textColor} styles={styles.button} disabled={false} />
    </View>
  )
}

export default ButtonComponent

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    marginHorizontal: 10,
    marginVertical: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    
  }
})
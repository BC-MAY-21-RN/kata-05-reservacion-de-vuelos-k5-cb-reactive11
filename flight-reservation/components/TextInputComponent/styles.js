import { StyleSheet } from "react-native"
export const styles = StyleSheet.create({
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

import { StyleSheet } from 'react-native';
export const styles = bdColor =>
  StyleSheet.create({
    container: {
      marginBottom: 10,
    },
    titleSection: {
      flexDirection: 'row',
      paddingBottom: 5,
    },
    title: {
      color: 'grey',
      fontSize: 16,
    },
    titleWarning: {
      color: 'red',
      fontSize: 16,
      fontWeight: '300',
    },
    input: {
      height: 45,
      paddingLeft: 12,
      fontSize: 18,
      borderWidth: 1,
      borderColor: bdColor,
      color: 'black',
    },
    hint: {
      color: 'grey',
      textAlign: 'justify',
      fontWeight: '300',
      fontSize: 13,
    },
    icon: {
      position: 'absolute',
      right: 5,
      top: 10,
    },
  });

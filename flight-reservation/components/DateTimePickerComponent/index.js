import { StyleSheet, Text, View, Button, Platform } from 'react-native'
import React, { useState } from 'react'
import DateTimePicker from '@react-native-community/datetimepicker';

const DatePickerComponent = () => {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(true);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    if (Platform.OS === 'android') {
      setShow(false);
      // for iOS, add a button that closes the picker
    }
    setMode(currentMode);
    setShow(true)
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };

  return (
    <View style={styles.container}>
      <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          onChange={onChange}
          display='spinner'
        />
        <Text style={styles.text}>Selected: {date.toLocaleString()}</Text>
    </View>
  );
}

export default DatePickerComponent

const styles = StyleSheet.create({
  container: {
     width: '100%',
     justifyContent: 'center',
     alignContent: 'center'
     
  },
  text: {
    backgroundColor: 'red',
    alignTextContent: 'center',
    textAlign: 'center',
  }
})
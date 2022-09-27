import { View, Text } from 'react-native';
import { SpinPicker } from 'react-native-spin-picker';
import React, { useState } from 'react';
import data from '../../assets/data/passengers.json';
import styles from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCaretRight, faCaretLeft } from '@fortawesome/free-solid-svg-icons';

const SelectNumberComponent = () => {
  const [selectedItem, setSelectedItem] = useState(1);

  return (
    <View style={styles.container}>
      <View style={styles.whiteTopLine} />
      <FontAwesomeIcon icon={faCaretRight} size={30} color="#5c6ef8" />
      <SpinPicker
        style={styles.spiner}
        data={[...data]}
        value={selectedItem}
        onValueChange={selectedItem => setSelectedItem(selectedItem)}
        keyExtractor={number => number.toString()}
        renderItem={item => (
          <Text style={styles.numbers}>{item.toString()}</Text>
        )}
      />
      <FontAwesomeIcon icon={faCaretLeft} size={30} color="#5c6ef8" />
      <View style={styles.whiteBottomLine} />
    </View>
  );
};

export default SelectNumberComponent;

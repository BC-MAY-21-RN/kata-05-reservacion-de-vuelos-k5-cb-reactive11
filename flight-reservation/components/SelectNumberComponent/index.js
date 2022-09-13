import { View, Text } from 'react-native'
import { SpinPicker } from 'react-native-spin-picker'
import React, { useState } from 'react'
import data from "../../assets/data/passengers.json";
import styles from './styles';
import { AntDesign } from '@expo/vector-icons';


const SelectNumberComponent = () => {

    const [selectedItem, setSelectedItem] = useState(1);

    return (
        <View style={styles.container}>
            <AntDesign name="caretright" size={15} color="#5c6ef8" />
            <View style={styles.whiteTopLine}></View>
            <SpinPicker
                style={styles.spiner}
                data={[...data]}
                value={selectedItem}
                onValueChange={selectedItem => setSelectedItem(selectedItem)}
                keyExtractor={number => number.toString()}
                renderItem={item => <Text style={styles.numbers}>{item.toString()}</Text>}
            />
            <AntDesign name="caretleft" size={15} color="#5c6ef8" />
            <View style={styles.whiteBottomLine}></View>

        </View>
    )
}

export default SelectNumberComponent;
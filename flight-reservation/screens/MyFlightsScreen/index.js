import { View } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { FlightList, TitleComponent } from '../../components'
import React from 'react'
import styles from "./styles";

const MyFlightsScreen = () => {
    return (
        <View style={styles.mainContainer}>
            <View style={styles.title}>
                <TitleComponent title="My flights" />
            </View>
            <FlightList />
            <AntDesign name="pluscircle" size={60} color="#6170F7" style={styles.icon} />
        </View>
    )
}

export default MyFlightsScreen;

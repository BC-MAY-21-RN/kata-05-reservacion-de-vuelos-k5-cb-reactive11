import { View, SafeAreaView, TouchableOpacity } from 'react-native';
import { FlightList } from '../../components';
import React from 'react';
import styles from './styles';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

const MyFlightsScreen = ({ route, navigation }) => {
  const credentials = route.params;
  return (
    <SafeAreaView style={styles.globalContainer}>
      <View style={styles.mainContainer}>
        <FlightList />
        <TouchableOpacity activeOpacity={0.9} style={styles.icon}>
          <FontAwesomeIcon icon={faCirclePlus} size={60} color="#6170F7" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default MyFlightsScreen;

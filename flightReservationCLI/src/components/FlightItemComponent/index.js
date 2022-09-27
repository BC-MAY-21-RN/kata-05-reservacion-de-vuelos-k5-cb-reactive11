import { View, Text } from 'react-native';
import styles from './style';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPlane } from '@fortawesome/free-solid-svg-icons';

const FlightItem = ({
  date,
  destLong,
  destShort,
  originLong,
  originShort,
  passengers,
}) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.destination}>
        <View>
          <Text style={styles.destinationText}>{originShort}</Text>
          <Text style={styles.subText}>{originLong}</Text>
        </View>
        <FontAwesomeIcon icon={faPlane} size={20} color="#6170F7" />

        <View style={styles.rightColumn}>
          <Text style={styles.destinationText}>{destShort}</Text>
          <Text style={styles.subText}>{destLong}</Text>
        </View>
      </View>
      <View style={styles.date}>
        <Text style={styles.dateText}>{date}</Text>
        {passengers && (
          <Text style={styles.dateText}>{passengers} Passengers</Text>
        )}
      </View>
    </View>
  );
};

export default FlightItem;

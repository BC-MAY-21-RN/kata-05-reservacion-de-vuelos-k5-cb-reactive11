/* eslint-disable react/prop-types */
import { View  } from "react-native";
import React, { useState } from "react";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { styles } from "./styles";


const CheckBoxComponent = ({text, status}) => {
  // for later use
  // const [checked, setChecked] = useState(false);
  // const [color, setColor] = useState('gray')

  return (
    <View style={styles.container}>
      <BouncyCheckbox
        size={styles.size}
        fillColor={styles.fillColor}
        text={text}
        innerIconStyle={styles.innerIconStyle}
      />
    </View>
  );
};

export default CheckBoxComponent;


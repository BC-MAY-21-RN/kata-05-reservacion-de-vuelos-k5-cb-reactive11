import { View  } from "react-native";
import React from "react";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { styles } from "./styles";

const CheckBoxComponent = ({text}) => {
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

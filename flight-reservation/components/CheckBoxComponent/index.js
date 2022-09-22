import { View } from "react-native";
import React from "react";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { styles } from "./styles";

const CheckBoxComponent = ({ text, state, setState }) => {


  return (
    <View style={styles.container}>
      <BouncyCheckbox
        size={styles.size}
        fillColor={state ? "#6270de" : "grey" }
        text={text}
        innerIconStyle={styles.innerIconStyle}
        onPress={(isChecked: true) => { setState(!state) }}
      />
    </View>
  );
};

export default CheckBoxComponent;

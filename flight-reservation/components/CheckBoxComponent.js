import { StyleSheet, Text, View, Pressable } from "react-native";
import React, { useState } from "react";
import BouncyCheckbox from "react-native-bouncy-checkbox";

const CheckBoxComponent = ({text, status}) => {
  const [checked, setChecked] = useState(false);

  return (
    <View style={styles.container}>
      <BouncyCheckbox
        size={25}
        fillColor="gray"
        unfillColor="#FFFFFF"
        text={text}
        iconStyle={{ borderColor: "red" }}
        innerIconStyle={{ borderWidth: 2 }}
        textStyle={{ fontFamily: "JosefinSans-Regular" }}
        onPress={(isChecked: checked) => {}}
        innerIconStyle={{borderRadius: 0, }}

      />
    </View>
  );
};

export default CheckBoxComponent;

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  }
});

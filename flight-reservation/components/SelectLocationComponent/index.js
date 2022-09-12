import React from "react";
import { View,Text } from "react-native";
import SelectList from 'react-native-dropdown-select-list'; 
import styles from "./styles";
import countries from "../../assets/data/countries.json"

const SelectLocationComponent = () =>{
   
    const [selected, setSelected] = React.useState("");


    return(
        <View style={styles.container}>
            <SelectList placeholder="Select Location" 
            data={countries} setSelected={setSelected} 
            boxStyles={styles.boxStyles} 
            dropdownStyles={styles.optionsBox} inputStyles={styles.searchText} 
            searchicon=""/>
            <View style={styles.line}></View>
        </View>
    )

}

export default SelectLocationComponent
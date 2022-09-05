import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    mainContainer:{
        borderColor: '#000',
        borderBottomWidth: 1,
        paddingBottom: 20,
        width: '80%'
    },
    destination:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBottom: 10,
        marginBottom: 10,
        borderBottomWidth: .55,
        borderColor: '#808080'
    },
    date:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    destinationText:{
        fontSize: 22,
        fontWeight: 'bold'
    },
    dateText:{
        fontSize: 15,
        fontWeight: '600'
    },
    subText: {
        fontSize: 12,
        color: 'gray'
    }

});

export default styles
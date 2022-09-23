import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        width: '90%',
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center'
    },
    numbers: {
        fontWeight: '600',
        fontSize: 20,
        paddingHorizontal: 35,
        paddingVertical: 5,
        borderColor: 'white',
    },
    whiteTopLine: {
        width: '28%',
        position: 'absolute',
        zIndex: 1,
        top: 33,
        backgroundColor: 'white',
        height: 8
    },
    whiteBottomLine: {
        width: '28%',
        position: 'absolute',
        bottom: 36,
        backgroundColor: 'white',
        height: 5
    }
});

export default styles;

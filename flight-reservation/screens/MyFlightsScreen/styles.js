import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    globalContainer: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
      },
    icon: {
        position: 'absolute',
        bottom: 10
    },
    mainContainer: {
        flex: 1,
        width: '95%',
        alignItems: 'center',
    },
    title: {
        width: '90%',
        marginRight: 10,
        marginBottom: 10      
    },
})

export default styles;

import { StyleSheet } from "react-native";

export const styles = (bgColor) => StyleSheet.create({
  container: {
    padding: 8,
    borderRadius: 10,
    marginHorizontal: 10,
    marginVertical: 5,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: bgColor
  },
  button: {
    color: 'white',
    fontSize: 16,
  }
});

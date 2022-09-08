import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  titleSection: {
    flexDirection: "row",
    paddingBottom: 5,
  },
  title: {
    color: "grey",
    fontSize: 16,
  },
  titleWarning: {
    color: "red",
    fontSize: 16,
    fontWeight: "300",
  },
  input: {
    borderWidth: 1,
    borderColor: "grey",
    height: 45,
    paddingLeft: 12,
    fontSize: 18,
  },
  inputContainer: {
    //paddingLeft: 5,
  },
  hint: {
    color: "grey",
    textAlign: "justify",
    fontWeight: "300",
    fontSize: 13,
  },
  icon: {
    position: "absolute",
    right: 0,
    paddingTop: 10,
    paddingRight: 5,
  },
});

import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "90%",
    marginHorizontal: "auto",
  },
  orSection: {
    alignItems: "center",
    marginVertical: 10,
  },
  singUpAlternative: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
  signUpLink: {
    color: "blue",
    marginLeft: 6,
    textDecorationStyle: "solid",
    textDecorationLine: "underline",
  },
  singUpAlternativeText: {
    color: "gray",
  },
});

export default styles;

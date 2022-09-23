import { StyleSheet } from "react-native";

const styles = (textColor) =>
  StyleSheet.create({
    title: {
      color: textColor,
      fontWeight: "900",
      fontSize: 28,
      paddingBottom: 10,
      letterSpacing: 0.9,
    },
  });

export default styles;

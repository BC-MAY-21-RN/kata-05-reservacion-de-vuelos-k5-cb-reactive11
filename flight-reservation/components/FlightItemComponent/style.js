import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  mainContainer: {
    borderColor: "#000",
    borderBottomWidth: 1,
    paddingBottom: 20,
    marginVertical: 5,
  },
  destination: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 10,
    marginBottom: 10,
    borderBottomWidth: 0.55,
    borderColor: "#808080",
  },
  rightColumn: {
    alignItems: "flex-end",
  },
  date: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  destinationText: {
    fontSize: 22,
    fontWeight: "bold",
  },
  dateText: {
    fontSize: 15,
    fontWeight: "600",
  },
  subText: {
    fontSize: 14,
    fontWeight: "300",
    color: "gray",
  },
});

export default styles;

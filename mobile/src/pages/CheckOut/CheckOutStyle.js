import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    resizeMode: "stretch",
    width: null,
    height: null,
    alignItems: "center",
    justifyContent: "center",
  },
  background: {
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    opacity: 0.8,
    margin: 16,
    padding: 16,
  },
  evaluation: {
    marginBottom: 10,
    marginTop: 10,
    alignContent: "center",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  stars: {
    alignItems: "flex-end",
  },
  textItem: {
    fontSize: 16,
  },
  button: {
    marginHorizontal: 16,
    width: "90%",
  },
});

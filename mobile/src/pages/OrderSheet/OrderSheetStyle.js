import { StyleSheet } from "react-native";
import { Title } from "react-native-paper";

export default StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#000",
  },
  surface: {
    backgroundColor: "#212121",
    flexGrow: 1,
    height: 100,
    borderRadius: 8,
    margin: 16,
  },
  header: {
    backgroundColor: "#1D1D1D",
    height: 100,
    padding: 16,
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
  },
  labelStyle: {
    color: "white",
  },
  button: {
    marginHorizontal: 16,
  },
  orderView: {
    flexDirection: "row",
    padding: 8,
    alignContent: "center",
  },
  line: {
    backgroundColor: "#535353",
    width: "100%",
    height: 1,
  },
  textOrder: {
    textAlign: "center",
    color: "white",
    fontSize: 16,
    flexGrow: 1,
    flexWrap: "wrap",
    maxWidth: "25%",
    textAlignVertical: "center",
  },
  textSmall: {},
  textTotal: {
    color: "white",
    fontSize: 30,
    textAlign: "center",
    marginBottom: 16,
  },
  addButton: {
    marginHorizontal: 16,
    marginVertical: 8,
  },
  titleText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#F4AA1D",
  },
  subTitleText: {
    fontSize: 24,
    color: "#F4AA1D",
    width: "auto",
  },
  headerTextView: {
    alignItems: "flex-end",
  },
  barImage: {
    borderRadius: 100,
  },
});

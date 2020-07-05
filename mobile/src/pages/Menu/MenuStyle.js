import { StyleSheet } from "react-native";

export default StyleSheet.create({
  background: {
    backgroundColor: "#000",
    padding: 20,
    flexGrow: 1,
  },
  tabsContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  tabText: {
    color: "#ffffff",
    fontWeight: "600",
    fontSize: 15,
  },
  menuContainer: {
    backgroundColor: "#2A2A2A",
    borderRadius: 20,
    height: 450,
  },
  productContainer: {
    padding: 10,
    flexDirection: "row",
  },
  infoContainer: {
    margin: 10,
    justifyContent: "space-around",
    flexWrap: 'wrap',
  },
  productName: {
    textTransform: "uppercase",
    color: "#ffffff",
  },
  productDescription: {
    color: "#ffffff",
    fontSize: 12,
    flexWrap: 'wrap',
    width: 200,
  },
  productPrice: {
    color: "#ffffff",
  },
  menuDivider: {
    borderColor: "#ffffff",
    borderWidth: 0.1,
  },
  tabHighlight: {
    padding: 10,
    backgroundColor: "#2A2A2A",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  tabNormal: {
    padding: 10,
  },
  header: {
    backgroundColor: "#2A2A2A",
    flexDirection: "row",
    alignItems: "center",
    height: 60,
    paddingHorizontal: 10,
  },
  barName: {
    color: "#F4AA1D",
    fontWeight: "600",
    fontSize: 25,
  },
  goBackText: {
    color: "#ffffff",
    fontSize: 20,
    marginLeft: 8,
  },
  goBackConatainer: {
    flexDirection: "row",
    alignItems: "center",
  },
});

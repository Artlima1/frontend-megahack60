import { StyleSheet } from "react-native";

export default StyleSheet.create({
  main: {
    flexGrow: 1,
  },
  container: {
    minHeight: "100%",
    resizeMode: "stretch",
    alignItems: "center",
    justifyContent: "center",
  },
  inputField: {
    marginBottom: 16,
  },
  form: {
    width: "100%",
    maxWidth: 380,
    padding: 32,
    alignContent: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  logo: {
    height: 120,
    resizeMode: "center",
  },
  textLogin: {
    color: "#F4AA1D",
    fontSize: 30,
    fontWeight: "bold",
  },
  button: {
    marginBottom: 16,
  },
  textButton: {
    fontSize: 18,
  },
});

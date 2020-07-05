import { StyleSheet } from "react-native";

export default StyleSheet.create({
  main: {
    flexGrow: 1,
  },
  image: {
    minHeight: "100%",
    resizeMode: "stretch",
  },
  container: {
    flexGrow: 1,
    resizeMode: "stretch",
    alignContent: 'center',
    marginTop: 100,
    alignItems: 'center',
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
  textTitle: {
    color: "#F4AA1D",
    fontSize: 40,
    fontWeight: "bold",
    alignSelf: "center",
    marginBottom: 30,
    marginTop: 64,
  },
  button: {
    marginBottom: 16,
  },
  textButton: {
    fontSize: 18,
  },
  blackView: {
    backgroundColor: "black",
    height: 300,
    width: 1000,
    transform: [{ rotate: "-188deg" }],
    position: "absolute",
    top: -100,
    left: -200,
  },
  backButton: {
    position: "absolute",
    zIndex: 100,
    top: 18,
    left: 16,
  },
});

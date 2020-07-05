import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
  },
  profileTitle: {
    fontSize: 45,
    color: "#F4AA1D",
    // shadowColor: "#000",
    // shadowRadius: 3.84,
    // elevation: 8,
  },
  optionsButtonContainer: {
    position: "relative",
  },
  profileHeader: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
    height: 160,
  },
  logo: {
    resizeMode: "contain",
    height: "60%",
  },
  text: {
    fontSize: 12,
    color: "#FFFFFF",
    marginLeft: 50,
    textAlignVertical: "top",
  },
  icon: {
    position: "absolute",
    marginTop: 30,
    marginLeft: 15,
  },
  cardIcon: {
    position: "absolute",
    marginTop: 115,
    marginLeft: 15,
  },
  alertIcon: {
    position: "absolute",
    marginTop: 200,
    marginLeft: 15,
  },
  helpIcon: {
    position: "absolute",
    marginTop: 280,
    marginLeft: 15,
  },
  exitIcon: {
    position: "absolute",
    marginTop: 365,
    marginLeft: 15,
  },
  optionsButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 20,
    marginLeft: 50,
  },
  whiteDivider: {
    backgroundColor: "#FFFFFF",
    height: 1,
    width: 300,
    alignSelf: "center",
    marginTop: 20,
  },
  userStyle: {
    flexDirection: "row-reverse",
    backgroundColor: "#FB0C06",
    height: 33,
    alignItems: "center",
    justifyContent: "flex-end",
    marginBottom: 20,
  },
  userImage: {
    position: "absolute",
    right: 16,
  },
  userText: {
    color: "#FFFFFF",
    fontSize: 25,
    fontWeight: "bold",
    marginLeft: 130,
    textTransform: "capitalize",
  },
  logoContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  logoImage: {
    flex: 1,
    width: 200,
    height: 200,
    resizeMode: "contain",
    marginTop: 170,
    alignSelf: "center",
  },
});

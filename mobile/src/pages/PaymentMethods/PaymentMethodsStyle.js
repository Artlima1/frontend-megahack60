import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
  },
  paymentMethodsHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    padding: 20,
    backgroundColor: "#455056",
    height: 160,
  },
  tentando: {
    flexGrow: 1,
    height: '100%',
  },
  seusPedidosContainer: {
    flexDirection: "column",
  },
  seusPedidosText: {
    color: "#FFFFFF",
    fontSize: 11,
    fontWeight: "bold",
    marginLeft: 10,
  },
  seusPedidosIcon: {
    marginLeft: 20,
  },
  paymentMethodsTitle: {
    fontSize: 40,
    marginLeft: 15,
    color: "#F4AA1D",
  },
  buttonCadastrarCartao: {
    backgroundColor: "#FB0C06",
    height: 50,
    width: 250,
    borderRadius: 10,
    alignSelf: "center",
  },
  buttonPagarDinheiro: {
    backgroundColor: "#FB0C06",
    height: 50,
    top: 40,
    width: 250,
    borderRadius: 10,
    alignSelf: "center",
  },
  buttonPagarCartao: {
    backgroundColor: "#FB0C06",
    bottom: 10,
    height: 50,
    width: 250,
    borderRadius: 10,
    alignSelf: "center",
  },
  finalizarPagamentoText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    alignSelf: "center",
    marginTop: 10,
  },
  cashText1: {
    color: "#000",
    fontSize: 28,
    fontWeight: "bold",
    alignSelf: "center",
    textAlign: "center",
    bottom: 90,
  },
  cashText2: {
    color: "#000",
    fontSize: 20,
    fontWeight: "bold",
    alignSelf: "center",
    textAlign: "center",
    width: 300,
    bottom: 50,
  },
  tabContainer: {
    flexDirection: "column",
    justifyContent: "space-between",
    width: "90%",
    height: "100%",
    alignSelf: "center",
    borderRadius: 10,
    marginBottom: 10,
    marginTop: 10,
  },
  cashButton: {
    top: "50%",
    alignSelf: "center",
  },
  littleGrayContainer: {
    height: 10,
  },
  littleGrayColor: {
    width: "100%",
    height: "100%",
  },
  grayComponent: {
    backgroundColor: "pink",
    flexDirection: "column",
    alignSelf: "auto",
  },
  logoCash: {
    resizeMode: "contain",
    height: "30%",
    top: 40,
    shadowColor: "#000",
    shadowRadius: 10,
  },
  blackLine: {
    color: "black",
    height: 80,
    width: "100%",
    top: 90,
  },
});

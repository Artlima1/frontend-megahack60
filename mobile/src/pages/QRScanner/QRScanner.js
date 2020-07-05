import React, { useState, useEffect, useContext } from "react";
import { Text, View, StyleSheet } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import { IconButton, Button } from "react-native-paper";
import Modal from "react-native-modal";
import TextInput from "../../Components/TextInput";
import api from "../../Services/api";
// import styles from './QRScannerStyle';
import ContextOrderSheet from "../../contextOrderSheet";
import { useNavigation } from "@react-navigation/native";

export default function QRScanner() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [modal, setModal] = useState(false);
  const [code, setCode] = useState();
  const navigation = useNavigation();
  const { setOderSheet } = useContext(ContextOrderSheet);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    validate(data);
  };

  async function validate(data) {
    try {
      const response = await api.post("order_sheets", {
        payment_method: "Cartao",
        tables_id: data,
      });
      alert("Mesa encontrada com sucesso!");
      const response2 = await api.get(`order_sheets_id/${response.data}`);
      setOderSheet(response2.data);
      navigation.navigate("Comanda", {update: '!'});
    } catch (error) {
      console.log(error);
      console.log(error.response);
      alert("Mesa não encontrada");
    }
  }

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
        justifyContent: "flex-end",
      }}
    >
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />

      {scanned && (
        <Button mode={"contained"} onPress={() => setScanned(false)}>
          Escanear novamente
        </Button>
      )}
      <IconButton
        icon="alphabetical"
        style={{ position: "absolute", top: 16, right: 16, elevation: 4 }}
        color="white"
        size={35}
        onPress={() => {
          setModal(true);
        }}
      />
      <Modal
        isVisible={modal}
        onBackButtonPress={() => setModal(false)}
        onBackdropPress={() => setModal(false)}
      >
        <View style={{ backgroundColor: "#212121", padding: 16 }}>
          <TextInput
            label="Código da mesa"
            onChangeText={(text) => {
              setCode(text);
            }}
          />
          <Button
            mode={"contained"}
            style={{ marginTop: 16 }}
            onPress={() => {
              setModal(false);
              validate(code);
            }}
          >
            Enviar
          </Button>
        </View>
      </Modal>
    </View>
  );
}

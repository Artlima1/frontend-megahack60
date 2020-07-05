import React, { useState, useContext } from "react";
import api from "../../../Services/api";
import {
  Image,
  Text,
  View,
  TouchableHighlight,
  StyleSheet,
  ImageBackground,
} from "react-native";
import ContextOrderSheet from "../../../contextOrderSheet";

import { AntDesign } from "@expo/vector-icons";

const styles = StyleSheet.create({
  container: {
    flex: 0.6,
    backgroundColor: "#ffffff",
    justifyContent: "space-between",
  },
  imgBackground: {
    width: "100%",
    height: 150,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  productName: {
    fontSize: 50,
    fontWeight: "600",
  },
  icon: {
    position: "absolute",
    right: 5,
    top: 5,
  },
  quantityContainer: {
    width: 150,
    flexDirection: "row",
    justifyContent: "space-between",
    alignSelf: "center",
    alignItems: "center",
    paddingVertical: 20,
  },
  quantity: {
    color: "#2D9235",
    fontSize: 40,
  },
  orderButton: {
    alignSelf: "center",
    paddingVertical: 5,
    paddingHorizontal: 50,
    backgroundColor: "#FB0C06",
    borderRadius: 20,
    marginBottom: 30,
  },
  orderText: {
    fontSize: 40,
    color: "#ffffff",
    fontWeight: "600",
  },
});

export default function ModalContent({ product, setModalFlag, navigation }) {
  const [amount, setAmount] = useState(1);
  const { getOrder } = useContext(ContextOrderSheet);
  const orderSheet = getOrder();

  function order() {
    api
      .post("order", {
        products_id: product.id,
        order_sheets_id: orderSheet.id,
        amount: amount,
      })
      .then((res) => {
        setModalFlag(false);
        navigation.navigate("Comanda", { update: "!" });
      })
      .catch((err) => {
        console.log(err.response);
        alert(err);
      });
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        source={{ uri: `https://drive.google.com/uc?id=${product.image_id}` }}
        style={styles.imgBackground}
      >
        <AntDesign
          name="closecircle"
          size={30}
          color="black"
          style={styles.icon}
          onPress={() => {
            setModalFlag(false);
          }}
        />
        <Text style={styles.productName}>{product.name}</Text>
      </ImageBackground>
      <View style={styles.quantityContainer}>
        <AntDesign
          name="minuscircleo"
          size={40}
          color="#2D9235"
          onPress={() => {
            setAmount(amount - 1);
          }}
        />
        <Text style={styles.quantity}>{amount}</Text>
        <AntDesign
          name="pluscircleo"
          size={40}
          color="#2D9235"
          onPress={() => {
            setAmount(amount + 1);
          }}
        />
      </View>
      <TouchableHighlight
        style={styles.orderButton}
        onPress={() => {
          order();
        }}
      >
        <Text style={styles.orderText}>PEDIR</Text>
      </TouchableHighlight>
    </View>
  );
}

import React, { useState, useContext, useEffect } from "react";
import styles from "./OrderSheetStyle";
import { StyleSheet, Text, View, Image } from "react-native";
import { Button } from "react-native-paper";
import { FlatList } from "react-native-gesture-handler";
import ContextOrderSheet from "../../contextOrderSheet";
import api from "../../Services/api";

function Order({ data }) {
  const total = data.price * data.amount;

  function getPrice() {
    return Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(data.price);
  }

  function getTotalPrice() {
    return Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(total);
  }

  return (
    <View style={styles.orderView}>
      <Text style={[styles.textOrder, styles.textSmall]}>x {data.amount}</Text>
      <Text style={styles.textOrder}>{getPrice()}</Text>
      <Text style={styles.textOrder}>{data.name}</Text>
      <Text style={styles.textOrder}>{getTotalPrice()}</Text>
    </View>
  );
}

export default function OrderList({ navigation, route }) {
  const { getOrder } = useContext(ContextOrderSheet);
  let orderSheet = getOrder();

  if (!orderSheet) orderSheet = {};

  const [data, setData] = useState([]);

  let totalSum = 0;

  data.forEach((order) => (totalSum += order.amount * order.price));

  function getTotalPrice() {
    return Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(totalSum);
  }

  useEffect(() => {
    api
      .get(`orders/fromsheet/${orderSheet.id}`)
      .then((response) => setData(response.data));
  }, [route.params]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={{
            uri: `https://drive.google.com/uc?id=${orderSheet.image_id}`,
          }}
          style={{ width: 70, height: 70, borderRadius: 100 }}
        />
        <View style={styles.headerTextView}>
          <Text style={styles.titleText}>COMANDA</Text>
          <Text style={styles.subTitleText}>
            Mesa {orderSheet.table_number}
          </Text>
        </View>
      </View>
      <View style={styles.surface}>
        <View style={styles.orderView}>
          <Text style={[styles.textOrder, styles.textSmall]}>Qnt</Text>
          <Text style={styles.textOrder}>$ Unidade</Text>
          <Text style={styles.textOrder}>Nome</Text>
          <Text style={styles.textOrder}>$ Soma</Text>
        </View>
        <FlatList
          data={data}
          renderItem={({ item }) => <Order data={item} />}
          ItemSeparatorComponent={() => <View style={styles.line} />}
          keyExtractor={(item, index) => index + ""}
          ListFooterComponent={
            <Button
              style={styles.addButton}
              mode={"contained"}
              icon={"plus-circle"}
              color={"#2D9235"}
              onPress={() => {
                navigation.push("Menu");
              }}
            >
              Adicionar mais itens
            </Button>
          }
        />
        <View style={styles.line} />
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-end",
            padding: 16,
          }}
        >
          <Text style={styles.textTotal}>Total:</Text>
          <Text style={styles.textTotal2}> {getTotalPrice()}</Text>
        </View>
      </View>
      <Button
        mode="contained"
        labelStyle={styles.labelStyle}
        style={styles.button}
        onPress={() => {
          navigation.navigate("PaymentMethods", { orderSheet });
        }}
      >
        Pagar Agora
      </Button>
    </View>
  );
}

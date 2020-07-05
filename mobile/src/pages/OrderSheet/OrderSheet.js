import React, { useState, useContext } from "react";
import styles from "./OrderSheetStyle";
import { StyleSheet, Text, View, Image } from "react-native";
import { Button } from "react-native-paper";
import { FlatList } from "react-native-gesture-handler";
import ContextOrderSheet from "../../contextOrderSheet";

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

export default function OrderList({ navigation }) {
  const { getOrder } = useContext(ContextOrderSheet);
  let orderSheet = getOrder();

  if (!orderSheet) orderSheet = {};

  const [data, setData] = useState([
    { amount: 1, name: "teste", price: 10 },
    { amount: 1, name: "teste", price: 10 },
    { amount: 1, name: "testeaaaaaaaaaaaaaaaaaaaaaaa", price: 10 },
  ]);

  let totalSum = 0;

  data.forEach((order) => (totalSum += order.amount * order.price));

  function getTotalPrice() {
    return Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(totalSum);
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image height={70} width={70} style={styles.barImage}></Image>
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
        <View>
          <Text style={styles.textTotal}>TOTAL: {getTotalPrice()}</Text>
        </View>
      </View>
      <Button
        title="Ler QR"
        onPress={() => {
          navigation.push("Escanear");
        }}
      />
      <Button
        mode="contained"
        labelStyle={styles.labelStyle}
        style={styles.button}
        onPress={() => {
          navigation.push("Payment");
        }}
      >
        Pagar Agora
      </Button>

      <Button
        title="Fazer Pedido"
        onPress={() => {
          navigation.push("Menu");
        }}
      />
    </View>
  );
}

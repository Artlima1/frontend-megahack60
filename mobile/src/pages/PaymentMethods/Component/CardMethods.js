import React, { useContext } from "react";

import { Text, View, TouchableOpacity } from "react-native";
import styles from "../PaymentMethodsStyle";
import { useNavigation } from "@react-navigation/native";
import { CreditCardInput } from "react-native-input-credit-card";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import api from "../../../Services/api";
import contextOrderSheet from "../../../contextOrderSheet";

export default function CardMethods() {
  const navigation = useNavigation();
  const { getOrder } = useContext(contextOrderSheet);
  let orderSheet = getOrder();

  //const { orderSheet } = route.params;
  function handleChange(form) {
    console.log(form);
  }

  async function finalize() {
    try {
      await api.put(`/order_sheets/${orderSheet.id}`, {
        paid: true,
        checking_out: true,
        payment_method: "Cartao",
      });
      alert("Pagamento aprovado!");
      navigation.navigate("CheckOut");
    } catch (error) {
      alert("Falha no pagamento");
    }
  }

  return (
    <KeyboardAwareScrollView style={styles.tentando}>
      <CreditCardInput
        onChange={handleChange}
        cardScale={1.2}
        allowScroll={true}
        inputContainerStyle={{
          borderBottomWidth: 1,
          borderBottomColor: "black",
          right: 20,
          flexWrap: "wrap",
        }}
        inputStyle={{
          fontSize: 15,
        }}
      />
      <View>
        <TouchableOpacity
          onPress={() => {
            finalize();
          }}
          style={styles.buttonPagarCartao}
        >
          <Text style={styles.finalizarPagamentoText}>Pagar</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAwareScrollView>
  );
}

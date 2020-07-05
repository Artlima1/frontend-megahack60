import React, { useContext } from "react";

import { Text, View, TouchableOpacity } from "react-native";
import styles from "../PaymentMethodsStyle";
import { useNavigation } from "@react-navigation/native";
import contextOrderSheet from "../../../contextOrderSheet";

export default function CashMethods() {
  const navigation = useNavigation();
  const { getOrder } = useContext(contextOrderSheet);
  let orderSheet = getOrder();

  async function finalize() {
    try {
      await api.put(`/order_sheets/${orderSheet.id}`, {
        paid: true,
        checking_out: true,
        payment_method: "Dinheiro",
      });
      alert("Aguarde o garçom!");
      navigation.navigate("CheckOut");
    } catch (error) {
      alert("Falha no pagamento");
    }
  }

  return (
    <View style={styles.cashButton}>
      <Text style={styles.cashText1}>Obrigada pela visita! </Text>
      <Text style={styles.cashText2}>
        O garçom virá até sua mesa receber o pagamento
      </Text>
      <View>
        <TouchableOpacity
          onPress={() => {
            finalize();
          }}
          style={styles.buttonPagarDinheiro}
        >
          <Text style={styles.finalizarPagamentoText}>Pagar com dinheiro</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

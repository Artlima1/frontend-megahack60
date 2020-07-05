import React, { useState, useContext } from "react";

import { Text, TextInput, View, ImageBackground } from "react-native";
import { Button } from "react-native-paper";
import styles from "./CheckOutStyle.js";
import Stars from "react-native-stars";
import contextOrderSheet from "../../contextOrderSheet.js";
import api from "../../Services/api.js";
import { useNavigation } from "@react-navigation/native";

export default function CheckOut() {
  const [text, setText] = useState("");
  const [clean, setClean] = useState(2.5);
  const [space, setSpace] = useState(2.5);
  const [food, setFood] = useState(2.5);
  const [drink, setDrink] = useState(2.5);
  const [service, setService] = useState(2.5);
  const [price, setPrice] = useState(3);

  const { getOrder, setOderSheet } = useContext(contextOrderSheet);
  let orderSheet = getOrder();

  const navigation = useNavigation();

  async function finalize() {
    try {
      console.log(orderSheet);
      await api.post(`avaliation`, {
        bars_id: orderSheet.bars_id,
        bar_space: space,
        bar_service: service,
        bar_cleaning: clean,
        bar_foods: food,
        bar_drinks: drink,
        bar_price: price,
      });

      setOderSheet();
      navigation.navigate("Escanear");
    } catch (error) {
      console.log(error.response);
    }
  }

  return (
    <ImageBackground
      source={require("../../images/login.png")}
      style={styles.container}
    >
      <View style={styles.background}>
        <Text style={{ textAlign: "center", fontWeight: "bold" }}>
          Obrigado por comprar conosco, espere o garçom chegar com sua nota
          fiscal e a sessão será encerrada automaticamente!{"\n"}
        </Text>
        <Text style={styles.textItem}>Deixe sua avaliação</Text>
        <View style={styles.evaluation}>
          <Text style={styles.textItem}>Higiene e Limpeza:</Text>
          <View style={styles.stars}>
            <Stars
              half={true}
              default={clean}
              update={(val) => {
                setClean(val);
              }}
              spacing={4}
              starSize={30}
              count={5}
              fullStar={require("../../images/starFilled.png")}
              emptyStar={require("../../images/starEmpty.png")}
              halfStar={require("../../images/starHalf.png")}
            />
          </View>
        </View>
        <View style={styles.evaluation}>
          <Text style={styles.textItem}>Espaço:</Text>
          <View style={styles.stars}>
            <Stars
              half={true}
              default={space}
              update={(val) => {
                setSpace(val);
              }}
              spacing={4}
              starSize={30}
              count={5}
              fullStar={require("../../images/starFilled.png")}
              emptyStar={require("../../images/starEmpty.png")}
              halfStar={require("../../images/starHalf.png")}
            />
          </View>
        </View>
        <View style={styles.evaluation}>
          <Text style={styles.textItem}>Qualidade da bebida:</Text>
          <View style={styles.stars}>
            <Stars
              half={true}
              default={drink}
              update={(val) => {
                setDrink(val);
              }}
              spacing={4}
              starSize={30}
              count={5}
              fullStar={require("../../images/starFilled.png")}
              emptyStar={require("../../images/starEmpty.png")}
              halfStar={require("../../images/starHalf.png")}
            />
          </View>
        </View>
        <View style={styles.evaluation}>
          <Text style={styles.textItem}>Qualidade da comida:</Text>
          <View style={styles.stars}>
            <Stars
              half={true}
              default={food}
              update={(val) => {
                setFood(val);
              }}
              spacing={4}
              starSize={30}
              count={5}
              fullStar={require("../../images/starFilled.png")}
              emptyStar={require("../../images/starEmpty.png")}
              halfStar={require("../../images/starHalf.png")}
            />
          </View>
        </View>

        <View style={styles.evaluation}>
          <Text style={styles.textItem}>Atendimento:</Text>
          <View style={styles.stars}>
            <Stars
              half={true}
              default={service}
              update={(val) => {
                setService(val);
              }}
              spacing={4}
              starSize={30}
              count={5}
              fullStar={require("../../images/starFilled.png")}
              emptyStar={require("../../images/starEmpty.png")}
              halfStar={require("../../images/starHalf.png")}
            />
          </View>
        </View>
        <View style={styles.evaluation}>
          <Text style={styles.textItem}>Preço:</Text>
          <View style={styles.stars}>
            <Stars
              half={false}
              default={price}
              update={(val) => {
                setPrice(val);
              }}
              spacing={4}
              starSize={30}
              count={5}
              fullStar={require("../../images/moneyFilled.png")}
              emptyStar={require("../../images/moneyEmpty.png")}
              // halfStar={require('../../images/moneyHalf.png')}
            />
          </View>
        </View>

        <View style={{ padding: 10, margin: 10 }}>
          <TextInput
            style={{ height: 40 }}
            placeholder="Comente aqui sobre a sua experiência!"
            onChangeText={(text) => setText(text)}
            defaultValue={text}
          />
        </View>
      </View>
      <Button
        mode="contained"
        style={styles.button}
        onPress={() => {
          finalize();
        }}
      >
        Finalizar
      </Button>
    </ImageBackground>
  );
}

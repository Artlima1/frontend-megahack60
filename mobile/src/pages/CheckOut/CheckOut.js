import React, { useState } from "react";

import { Text, TextInput, View, ImageBackground } from "react-native";
import { Button } from "react-native-paper";
import styles from "./CheckOutStyle.js";
import Stars from "react-native-stars";

export default function CheckOut() {
  const [text, setText] = useState("");
  const [clean, setClean] = useState(2.5);
  const [space, setSpace] = useState(2.5);
  const [products, setProducts] = useState(2.5);
  const [service, setService] = useState(2.5);
  const [price, setPrice] = useState(3);

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
          <Text style={styles.textItem}>Qualidade dos Produtos:</Text>
          <View style={styles.stars}>
            <Stars
              half={true}
              default={products}
              update={(val) => {
                setProducts(val);
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
      <Button mode="contained" style={styles.button} onPress={() => {}}>
        Enviar
      </Button>
    </ImageBackground>
  );
}

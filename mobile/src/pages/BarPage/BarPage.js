import React, { useState, useEffect } from "react";

import {
  Text,
  View,
  Image,
  TouchableHighlight,
  SafeAreaView,
  ScrollView,
} from "react-native";

import Description from "./Tabs/Description";
import Avaliations from "./Tabs/Avaliations";
import Menu from "./Tabs/Menu";
import Comments from "./Tabs/Comments";

import styles from "./BarPageStyle";

import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import Stars from "react-native-stars";
import api from "../../Services/api";
import { IconButton } from "react-native-paper";
/*
const bar = {
  name: "The House",
  img_id: "teste",
  phone: "(31)5627819",
  state: "MG",
  neighborhood: "Plantações",
  street: "Rua batatão",
  number: "1",
  postal_code: "22334",
  city: "BH",
  description:
    "Conversar, beber, comer (comer muito bem!) e jogar videogame. Aqui, você vive todas essas experiências únicas. Venha conhecer a casa mais amiga do Brasil! Comida: Steakhouse, Brasileira, Grelhados, Americana, PubServimos bebidas alcoólicas e não alcoólicas. Venha conhecer o sofá de Friends e o trono do Game of Thrones! Comemore seu aniversário ",
};

const avaliation = {
  bar_space: 3,
  bar_service: 4,
  bar_cleaning: 4,
  bar_foods: 2,
  bar_drinks: 2,
  bar_price: 2,
};

const products = [
  {
    name: "Espetinho",
    product_categ: "portion",
    image_id:
      "https://raw.githubusercontent.com/AboutReact/sampleresource/master/old_logo.png",
    description: "AAAAAAAAAAAAAAAAAAA",
    price: 14.5,
  },
  {
    name: "Heineken",
    product_categ: "drink",
    image_id:
      "https://raw.githubusercontent.com/AboutReact/sampleresource/master/old_logo.png",
    description: "AAAAAAAAAAAAAAAAAAA",
    price: 14.5,
  },
  {
    name: "bud",
    product_categ: "drink",
    image_id:
      "https://raw.githubusercontent.com/AboutReact/sampleresource/master/old_logo.png",
    description: "AAAAAAAAAAAAAAAAAAA",
    price: 14.5,
  },
  {
    name: "Petit gateau",
    product_categ: "desert",
    image_id:
      "https://raw.githubusercontent.com/AboutReact/sampleresource/master/old_logo.png",
    description: "AAAAAAAAAAAAAAAAAAA",
    price: 14.5,
  },
  {
    name: "Batata Frita",
    product_categ: "portion",
    image_id:
      "https://raw.githubusercontent.com/AboutReact/sampleresource/master/old_logo.png",
    description: "AAAAAAAAAAAAAAAAAAA",
    price: 14.5,
  },
  {
    name: "Mandioquinha",
    product_categ: "portion",
    image_id:
      "https://raw.githubusercontent.com/AboutReact/sampleresource/master/old_logo.png",
    description: "AAAAAAAAAAAAAAAAAAA",
    price: 14.5,
  },
  {
    name: "Sorvete",
    product_categ: "desert",
    image_id:
      "https://raw.githubusercontent.com/AboutReact/sampleresource/master/old_logo.png",
    description: "AAAAAAAAAAAAAAAAAAA",
    price: 14.5,
  },
  {
    name: "Skol Beats",
    product_categ: "drink",
    image_id:
      "https://raw.githubusercontent.com/AboutReact/sampleresource/master/old_logo.png",
    description: "AAAAAAAAAAAAAAAAAAA",
    price: 14.5,
  },
  {
    name: "Gim Tônica",
    product_categ: "drink",
    image_id:
      "https://raw.githubusercontent.com/AboutReact/sampleresource/master/old_logo.png",
    description: "AAAAAAAAAAAAAAAAAAA",
    price: 14.5,
  },
  {
    name: "Corotinho",
    product_categ: "drink",
    image_id:
      "https://raw.githubusercontent.com/AboutReact/sampleresource/master/old_logo.png",
    description: "AAAAAAAAAAAAAAAAAAA",
    price: 14.5,
  },
  {
    name: "Kibe Vegano",
    product_categ: "portion",
    image_id:
      "https://raw.githubusercontent.com/AboutReact/sampleresource/master/old_logo.png",
    description: "AAAAAAAAAAAAAAAAAAA",
    price: 14.5,
  },
  {
    name: "Torta de limão",
    product_categ: "desert",
    image_id:
      "https://raw.githubusercontent.com/AboutReact/sampleresource/master/old_logo.png",
    description: "AAAAAAAAAAAAAAAAAAA",
    price: 14.5,
  },
  {
    name: "Hamburguer",
    product_categ: "portions",
    image_id:
      "https://raw.githubusercontent.com/AboutReact/sampleresource/master/old_logo.png",
    description: "AAAAAAAAAAAAAAAAAAA",
    price: 14.5,
  },
  {
    name: "Vodka + Energético",
    product_categ: "drink",
    image_id:
      "https://raw.githubusercontent.com/AboutReact/sampleresource/master/old_logo.png",
    description: "AAAAAAAAAAAAAAAAAAA",
    price: 14.5,
  },
  {
    name: "Tequila Shot",
    product_categ: "drink",
    image_id:
      "https://raw.githubusercontent.com/AboutReact/sampleresource/master/old_logo.png",
    description: "AAAAAAAAAAAAAAAAAAA",
    price: 14.5,
  },
  {
    name: "Bolo Chocolate",
    product_categ: "desert",
    image_id:
      "https://raw.githubusercontent.com/AboutReact/sampleresource/master/old_logo.png",
    description: "AAAAAAAAAAAAAAAAAAA",
    price: 14.5,
  },
];


const comments = [
  {
    description: "Sai pra la ô carai",
  },
  {
    description: "Sai pra la ô carai",
  },
  {
    description: "Sai pra la ô carai",
  },
  {
    description: "Sai pra la ô carai",
  },
  {
    description: "Sai pra la ô carai",
  },
  {
    description: "Sai pra la ô carai",
  },
  {
    description: "Sai pra la ô carai",
  },
];
*/
export default function ParPage({ navigation, route }) {
  const { bar, avaliation, guests } = route.params;

  const [tab, setTab] = useState("description");
  const [products, setProducts] = useState([]);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    api.get(`menu/${bar.id}`).then((response) => {
      setProducts(response.data);
    });

    api.get(`comment/${bar.id}`).then((response) => {
      setComments(response.data);
    });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <View style={styles.backAndName}>
            <IconButton
              icon="arrow-left"
              mode="text"
              onPress={() => {
                navigation.pop();
              }}
              color={"#F4AA1D"}
              size={40}
              style={styles.backButton}
              labelStyle={styles.textButton}
            />
            <Text style={styles.barName}> {bar.name} </Text>
          </View>
          <View style={styles.clientsContainer}>
            <FontAwesome name="users" size={30} color="#ffffff" />
            <View style={styles.clientsString}>
              <Text style={styles.clientsNumber}> {guests}</Text>
              <Text style={styles.clients}> pessoas </Text>
            </View>
          </View>
        </View>

        <View style={styles.pictures}>
          <Image
            style={styles.barImg}
            source={{ uri: `https://drive.google.com/uc?id=${bar.image_id}` }}
          />
        </View>

        <View style={styles.stars}>
          <Stars
            default={avaliation.average}
            spacing={8}
            count={5}
            starSize={40}
            fullStar={require("../../images/starFilled.png")}
            emptyStar={require("../../images/starEmpty.png")}
          />
        </View>

        <View style={styles.tabBar}>
          <TouchableHighlight
            onPress={() => {
              setTab("description");
            }}
          >
            {tab === "description" ? (
              <View style={styles.tabHighlight}>
                <Text style={styles.tabText}>DESCRIÇÃO</Text>
              </View>
            ) : (
              <View style={styles.tabNormal}>
                <Text style={styles.tabText}>DESCRIÇÃO</Text>
              </View>
            )}
          </TouchableHighlight>

          <View style={styles.divider} />

          <TouchableHighlight
            onPress={() => {
              setTab("avaliations");
            }}
          >
            {tab === "avaliations" ? (
              <View style={styles.tabHighlight}>
                <Text style={styles.tabText}>NOTAS</Text>
              </View>
            ) : (
              <View style={styles.tabNormal}>
                <Text style={styles.tabText}>NOTAS</Text>
              </View>
            )}
          </TouchableHighlight>

          <View style={styles.divider} />

          <TouchableHighlight
            onPress={() => {
              setTab("menu");
            }}
          >
            {tab === "menu" ? (
              <View style={styles.tabHighlight}>
                <Text style={styles.tabText}>CARDÁPIO</Text>
              </View>
            ) : (
              <View style={styles.tabNormal}>
                <Text style={styles.tabText}>CARDÁPIO</Text>
              </View>
            )}
          </TouchableHighlight>

          <View style={styles.divider} />

          <TouchableHighlight
            onPress={() => {
              setTab("comments");
            }}
          >
            {tab === "comments" ? (
              <View style={styles.tabHighlight}>
                <Text style={styles.tabText}>COMENTÁRIOS</Text>
              </View>
            ) : (
              <View style={styles.tabNormal}>
                <Text style={styles.tabText}>COMENTÁRIOS</Text>
              </View>
            )}
          </TouchableHighlight>
        </View>

        <View style={styles.info}>
          {tab == "description" && <Description bar={bar} />}
          {tab == "avaliations" && <Avaliations avaliation={avaliation} />}
          {tab == "menu" && <Menu products={products} />}
          {tab == "comments" && <Comments comments={comments} />}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

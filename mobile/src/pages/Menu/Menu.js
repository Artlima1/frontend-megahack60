import React, { useState, useEffect, useContext } from "react";
import api from "../../Services/api";

import {
  Image,
  Text,
  View,
  TouchableHighlight,
  ScrollView,
} from "react-native";

import styles from "./MenuStyle";

import { Ionicons } from "@expo/vector-icons";
import Modal from "react-native-modal";
import ModalContent from "./Components/ModalContent";
import contextOrderSheet from "../../contextOrderSheet";
import { IconButton } from "react-native-paper";

export default function Menu({ navigation, route }) {
  const [products, setProducts] = useState([]);
  const [modalFlag, setModalFlag] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState();
  const [portions, setPortions] = useState([]);
  const [drinks, setDrinks] = useState([]);
  const [deserts, setDeserts] = useState([]);
  const [currentMenu, setCurrentMenu] = useState();

  const { getOrder } = useContext(contextOrderSheet);
  let orderSheet = getOrder();
  if (!orderSheet) orderSheet = {};

  const bar_id = orderSheet.bars_id;

  useEffect(() => {
    api
      .get(`menu/${bar_id}`)
      .then((response) => {
        setPortions(makeCategArray("portion", response.data));
        setDeserts(makeCategArray("desert", response.data));
        setDrinks(makeCategArray("drink", response.data));
        setCurrentMenu({
          tab: "portions",
          menu: makeCategArray("portion", response.data),
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    console.log("drinks: ");
    console.log(drinks);
  }, [drinks]);

  function getTotalPrice(totalSum) {
    return Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(totalSum);
  }

  function makeCategArray(categ, searchProducts) {
    console.log(searchProducts);
    const array = [];
    searchProducts.map((product) => {
      if (product.category === categ) {
        array.push(product);
      }
    });
    return array;
  }

  function selectTab(tabName) {
    if (tabName === "portions") {
      setCurrentMenu({
        tab: "portions",
        menu: portions,
      });
    }

    if (tabName === "drinks") {
      setCurrentMenu({
        tab: "drinks",
        menu: drinks,
      });
    }

    if (tabName === "deserts") {
      setCurrentMenu({
        tab: "deserts",
        menu: deserts,
      });
    }
  }

  function selectProduct(product) {
    setModalFlag(true);
    setSelectedProduct(product);
  }

  return (
    <View style={{ backgroundColor: "black", flexGrow: 1 }}>
      <Modal isVisible={modalFlag}>
        <ModalContent
          product={selectedProduct}
          setModalFlag={setModalFlag}
          navigation={navigation}
        />
      </Modal>

      <View style={styles.header}>
        <IconButton
          icon="arrow-left"
          mode="text"
          onPress={() => {
            navigation.pop();
          }}
          color={"#F4AA1D"}
          size={30}
          style={styles.backButton}
          labelStyle={styles.textButton}
        />
        <Text style={styles.barName}>{orderSheet.name}</Text>
      </View>

      <View style={styles.background}>
        <View style={styles.tabsContainer}>
          {portions && (
            <TouchableHighlight
              onPress={() => {
                selectTab("portions");
              }}
            >
              {currentMenu !== undefined && currentMenu.tab === "portions" ? (
                <View style={styles.tabHighlight}>
                  <Text style={styles.tabText}>Porções</Text>
                </View>
              ) : (
                <View style={styles.tabNormal}>
                  <Text style={styles.tabText}>Porções</Text>
                </View>
              )}
            </TouchableHighlight>
          )}
          {drinks && (
            <TouchableHighlight
              onPress={() => {
                selectTab("drinks");
              }}
            >
              {currentMenu !== undefined && currentMenu.tab === "drinks" ? (
                <View style={styles.tabHighlight}>
                  <Text style={styles.tabText}>Drinks</Text>
                </View>
              ) : (
                <View style={styles.tabNormal}>
                  <Text style={styles.tabText}>Drinks</Text>
                </View>
              )}
            </TouchableHighlight>
          )}
          {deserts && (
            <TouchableHighlight
              onPress={() => {
                selectTab("deserts");
              }}
            >
              {currentMenu !== undefined && currentMenu.tab === "deserts" ? (
                <View style={styles.tabHighlight}>
                  <Text style={styles.tabText}>Sobremesas</Text>
                </View>
              ) : (
                <View style={styles.tabNormal}>
                  <Text style={styles.tabText}>Sobremesas</Text>
                </View>
              )}
            </TouchableHighlight>
          )}
        </View>
        <ScrollView style={styles.menuContainer}>
          {currentMenu !== undefined &&
            currentMenu.menu.map((product) => {
              return (
                <View key={product.id}>
                  <TouchableHighlight
                    onPress={() => {
                      selectProduct(product);
                    }}
                  >
                    <View style={styles.productContainer}>
                      <Image
                        source={{
                          uri: `https://drive.google.com/uc?id=${product.image_id}`,
                        }}
                        style={{ width: 100, height: 100, borderRadius: 15 }}
                      />
                      <View style={styles.infoContainer}>
                        <Text style={styles.productName}>{product.name}</Text>
                        <Text style={styles.productDescription}>
                          {product.description}
                        </Text>
                        <Text style={styles.productPrice}>
                          {getTotalPrice(product.price)}
                        </Text>
                      </View>
                    </View>
                  </TouchableHighlight>
                  <View style={styles.menuDivider} />
                </View>
              );
            })}
        </ScrollView>
      </View>
    </View>
  );
}

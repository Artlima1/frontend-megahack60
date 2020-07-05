import React, { useState, useEffect } from "react";

import {
  Text,
  View,
  TouchableHighlight,
  StyleSheet,
  Image,
} from "react-native";

import "intl";
import "intl/locale-data/jsonp/pt-BR";

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#000",
    padding: 20,
  },
  tabsContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  tabText: {
    color: "#ffffff",
  },
  menuContainer: {
    backgroundColor: "#2A2A2A",
    borderRadius: 20,
  },
  productContainer: {
    padding: 10,
    flexDirection: "row",
  },
  infoContainer: {
    margin: 0,
    justifyContent: "space-around",
    alignContent: 'center',
  },
  productName: {
    textTransform: "uppercase",
    color: "#ffffff",
  },
  productDescription: {
    width: 200,
    color: "#ffffff",
    fontSize: 13,
    flexWrap: 'wrap'
  },
  productPrice: {
    color: "#ffffff",
  },
  menuDivider: {
    borderColor: "#ffffff",
    borderWidth: 0.1,
  },
  tabHighlight: {
    padding: 10,
    backgroundColor: "#2A2A2A",
  },
  tabNormal: {
    padding: 10,
  },
});

export default function Menu({ products }) {
  const [portions, setPortions] = useState(firstArray("portion", products));
  const [drinks, setDrinks] = useState(firstArray("drink", products));
  const [deserts, setDeserts] = useState(firstArray("desert", products));
  const [currentMenu, setCurrentMenu] = useState({
    tab: "portions",
    menu: portions,
  });

  function getTotalPrice(totalSum) {
    return Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(totalSum);
  }

  function firstArray(categ, searchProducts) {
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

  return (
    <View style={styles.background}>
      <View style={styles.tabsContainer}>
        <TouchableHighlight
          onPress={() => {
            selectTab("portions");
          }}
        >
          {currentMenu.tab === "portions" ? (
            <View style={styles.tabHighlight}>
              <Text style={styles.tabText}>Porções</Text>
            </View>
          ) : (
            <View style={styles.tabNormal}>
              <Text style={styles.tabText}>Porções</Text>
            </View>
          )}
        </TouchableHighlight>
        <TouchableHighlight
          onPress={() => {
            selectTab("drinks");
          }}
        >
          {currentMenu.tab === "drinks" ? (
            <View style={styles.tabHighlight}>
              <Text style={styles.tabText}>Drinks</Text>
            </View>
          ) : (
            <View style={styles.tabNormal}>
              <Text style={styles.tabText}>Drinks</Text>
            </View>
          )}
        </TouchableHighlight>
        <TouchableHighlight
          onPress={() => {
            selectTab("deserts");
          }}
        >
          {currentMenu.tab === "deserts" ? (
            <View style={styles.tabHighlight}>
              <Text style={styles.tabText}>Sobremesas</Text>
            </View>
          ) : (
            <View style={styles.tabNormal}>
              <Text style={styles.tabText}>Sobremesas</Text>
            </View>
          )}
        </TouchableHighlight>
      </View>
      <View style={styles.menuContainer}>
        {currentMenu &&
          currentMenu.menu.map((product) => {
            return (
              <View>
                <View style={styles.productContainer}>
                  <Image 
                    source={{ uri: `https://drive.google.com/uc?id=${product.image_id}` }}
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
                <View style={styles.menuDivider} />
              </View>
            );
          })}
      </View>
    </View>
  );
}

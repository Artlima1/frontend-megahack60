import React from "react";

import { Text, View, FlatList, TouchableHighlight } from "react-native";
import styles from "./BarListStyle.js";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import { IconButton, Avatar, Card, Title, Paragraph } from "react-native-paper";
import Stars from "react-native-stars";
import { useNavigation } from "@react-navigation/native";

function BarCard({ bar }) {
  const navigation = useNavigation();

  return (
    <TouchableHighlight
      onPress={() => {
        navigation.push("BarPage");
      }}
      style={{ margin: 16 }}
    >
      <Card>
        <Card.Title title={bar.name} />
        <Card.Cover source={require("../../images/promo.png")} />
        <Card.Content>
          <View style={styles.legendCard}>
            <View style={styles.stars}>
              <Stars
                display={3.67}
                spacing={8}
                count={5}
                starSize={25}
                fullStar={require("../../images/starFilled.png")}
                emptyStar={require("../../images/starEmpty.png")}
              />
            </View>
            <View style={styles.peopleIcon}>
              <Ionicons name="ios-people" size={40} color="#757575" />
              <Text
                style={{
                  color: "#757575",
                  fontWeight: "bold",
                  fontSize: 10,
                }}
              >
                84 pessoas
              </Text>
            </View>
          </View>
        </Card.Content>
      </Card>
    </TouchableHighlight>
  );
}

export default function BarList({ bars }) {
  return (
    <FlatList
      data={bars}
      renderItem={({ item }) => <BarCard bar={item} />}
      keyExtractor={(item, index) => index + ""}
      style={{ height: "100%" }}
      contentContainerStyle={{ height: "100%" }}
    />
  );
}

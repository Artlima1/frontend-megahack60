import React, { useState, useEffect } from "react";

import { Text, View, FlatList, TouchableHighlight } from "react-native";
import styles from "./BarListStyle.js";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import { IconButton, Avatar, Card, Title, Paragraph } from "react-native-paper";
import Stars from "react-native-stars";
import { useNavigation } from "@react-navigation/native";
import api from "../../Services/api.js";

function BarCard({ bar }) {
  const navigation = useNavigation();
  const [avaliation, setAvaliation] = useState({});
  const [guests, setGuests] = useState(0);

  useEffect(() => {
    try {
      api.get(`avaliation/${bar.id}`).then((response) => {
        const newAvaliation = response.data;

        let avg = 0;
        avg += newAvaliation.bar_space;
        avg += newAvaliation.bar_service;
        avg += newAvaliation.bar_cleaning;
        avg += newAvaliation.bar_foods;
        avg += newAvaliation.bar_drinks;
        avg += newAvaliation.bar_price;

        avg /= 6;

        newAvaliation.average = avg;
        setAvaliation(newAvaliation);
      });

      api.get(`people/${bar.id}`).then((response) => {
        setGuests(response.data.guests);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  const title = bar.event_description ? bar.event_description : bar.name;

  const uri = bar.event_image_link
    ? bar.event_image_link
    : `https://drive.google.com/uc?id=${bar.image_id}`;

  const distance = bar.distance;

  return (
    <TouchableHighlight
      onPress={() => {
        navigation.navigate("BarPage", { bar, avaliation, guests });
      }}
      style={{ margin: 16 }}
    >
      <Card>
        <Card.Title title={title} />
        <Card.Cover source={{ uri }} />
        <Card.Content>
          <View style={styles.legendCard}>
            <View style={styles.stars}>
              <Stars
                default={avaliation.average}
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
                {guests ? guests : 0} pessoas
              </Text>
            </View>
            {distance && (
              <View style={{ flexGrow: 1 }}>
                <Text
                  style={{
                    color: "#757575",
                    fontWeight: "bold",
                    fontSize: 10,
                    width: "100%",
                    textAlign: "center",
                  }}
                >
                  {Math.round(distance)} km
                </Text>
              </View>
            )}
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

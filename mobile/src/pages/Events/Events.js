import React from "react";

import {
  Header,
  Text,
  View,
  Button,
  SafeAreaView,
  ScrollView,
} from "react-native";
import styles from "./EventsStyle.js";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import { IconButton, Avatar, Card, Title, Paragraph } from "react-native-paper";
import Stars from "react-native-stars";
import { FlatList, TouchableHighlight } from "react-native";
import BarList from "../../Components/Barlist";

export default function Events({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <BarList bars={[{ name: "a" }, { name: "b" }]} />
      </ScrollView>
    </SafeAreaView>
  );
}

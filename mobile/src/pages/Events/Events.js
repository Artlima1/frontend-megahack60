import React, { useEffect, useState } from "react";

import { SafeAreaView, ScrollView } from "react-native";
import styles from "./EventsStyle.js";
import BarList from "../../Components/Barlist";
import api from "../../Services/api";

export default function Events({ navigation }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    api.get("event").then((response) => {
      setData(response.data);
    });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <BarList bars={data} />
      </ScrollView>
    </SafeAreaView>
  );
}

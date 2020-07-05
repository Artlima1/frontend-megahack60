import React, { useContext } from "react";
import AuthContext from "../../context";

import { AntDesign, Entypo, Ionicons, Foundation } from "@expo/vector-icons";
import styles from "./ProfileStyle";

import { Text, View, Button, TouchableOpacity, Image } from "react-native";

export default function Profile({ navigation }) {
  const { signOut } = useContext(AuthContext);

  const ProfileButtons = ({ onPress, title, subtitle, icon }) => (
    <TouchableOpacity onPress={onPress} style={styles.optionsButtonContainer}>
      {icon}
      <Text style={styles.optionsButtonText}>{title}</Text>
      <Text style={styles.text}>{subtitle}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.profileHeader}>
        <Image
          style={styles.logo}
          source={require("../../images/friday_1.png")}
        />
      </View>

      <View style={styles.userStyle}>
        <Text style={styles.userText}>Tabata Silva Carneiro</Text>
        <Image
          style={styles.userImage}
          source={require("../../images/userImage.png")}
        />
      </View>

      <View style={styles.profileButtons}>
        <ProfileButtons
          title="Bares Curtidos"
          subtitle="Ver meus bares curtidos"
          onPress={() => {
            navigation.push("FavBars");
          }}
          icon={
            <AntDesign
              name="heart"
              size={24}
              color="#FFFFFF"
              style={styles.icon}
            />
          }
        />
        <View style={styles.whiteDivider} />

        <ProfileButtons
          title="Métodos de Pagamento"
          subtitle="Meus métodos de pagamentos"
          onPress={() => {
            navigation.push("PaymentMethods");
          }}
          icon={
            <Entypo
              name="credit-card"
              size={24}
              color="#FFFFFF"
              style={styles.icon}
            />
          }
        />
        <View style={styles.whiteDivider} />
        <ProfileButtons
          title="Ajuda"
          subtitle="Aperte em caso de assédio e notifique o bar"
          onPress={() => {
            navigation.push("Help");
          }}
          icon={
            <Entypo
              name="help-with-circle"
              size={24}
              color="#FFFFFF"
              style={styles.icon}
            />
          }
        />

        <View style={styles.whiteDivider} />

        <ProfileButtons
          title="Sair"
          subtitle="Desconectar da sua conta"
          onPress={() => {
            navigation.push("Help");
          }}
          icon={
            <Ionicons
              name="md-exit"
              size={24}
              color="#FFFFFF"
              style={styles.icon}
            />
          }
        />

        <View style={styles.whiteDivider} />

        <Image
          style={styles.logoImage}
          source={require("../../images/logo.png")}
        />
      </View>
    </View>
  );
}

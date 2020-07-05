import React, { useState, useContext, useRef } from "react";

import { Text, View, ImageBackground, Image } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Button, IconButton } from "react-native-paper";

import TextInput from "../../Components/TextInput";
import styles from "./ForgotPasswordStyle";

export default function Forgot({ navigation }) {
  const [name, setName] = useState();
  const [surname, setSurname] = useState();
  const [birthDate, setBirthDate] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [showModal, setShowModal] = useState(false);

  const { signIn } = useContext(AuthContext);

  function onChangeDate(event, newDate) {
    setShowModal(false);
    if (newDate) {
      setBirthDate(newDate);
    }
  }

  function getDate() {
    return Intl.DateTimeFormat("pt-BR").format(birthDate);
  }

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={styles.main}
      keyboardShouldPersistTaps={"handled"}
    >
      <IconButton
        icon="arrow-left"
        mode="text"
        onPress={() => {
          navigation.push("Login");
        }}
        color={"#F4AA1D"}
        style={styles.backButton}
        labelStyle={styles.textButton}
      />
      <ImageBackground
        source={require("../../images/signup.png")}
        style={styles.image}
      >
        <View style={styles.blackView} />
        <Text style={styles.textTitle}>Esqueci a senha</Text>
        <View style={styles.container}>
          <View style={styles.form}>
            <TextInput
              style={styles.inputField}
              label="E-mail"
              value={email}
              onChangeText={(email) => setEmail(email)}
            />
           
            <Button mode="contained" onPress={() => {}} style={styles.button}>
              Enviar
            </Button>
          </View>
        </View>
      </ImageBackground>
    </KeyboardAwareScrollView>
  );
}

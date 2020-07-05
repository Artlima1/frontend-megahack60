import React, { useState, useContext, useRef } from "react";

import { Text, View, ImageBackground, Image } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Button, IconButton } from "react-native-paper";
import DateTimePicker from "@react-native-community/datetimepicker";

import TextInput from "../../Components/TextInput";
import styles from "./SignUpStyle";
import api from "../../Services/api";

export default function SignUp({ navigation }) {
  const [name, setName] = useState();
  const [surname, setSurname] = useState();
  const [birthDate, setBirthDate] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [showModal, setShowModal] = useState(false);

  const { signIn } = useContext(AuthContext);

  async function signup() {
    try {
      const response = await api.post(`user`, {
        name,
        surname,
        birthDate,
        email,
        password,
      });
      return response.data;
    } catch (error) {
      console.log(error.response.data.message);
    }
  }

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
        <Text style={styles.textTitle}>Cadastrar</Text>
        <View style={styles.container}>
          <View style={styles.form}>
            <TextInput
              style={styles.inputField}
              label="Nome"
              value={name}
              onChangeText={(name) => setName(name)}
              error={true}
              errorMessage={"aa"}
            />
            <TextInput
              style={styles.inputField}
              label="Sobrenome"
              value={surname}
              onChangeText={(surname) => setSurname(surname)}
            />

            <TextInput
              style={styles.inputField}
              label="Data de nascimento"
              value={getDate()}
              onPress={() => {
                setShowModal(true);
                f;
              }}
              editable={false}
            />

            {showModal && (
              <DateTimePicker
                testID="dateTimePicker"
                timeZoneOffsetInMinutes={0}
                value={birthDate ? birthDate : Date.now()}
                mode="date"
                is24Hour={true}
                display="default"
                onChange={onChangeDate}
                maximumDate={Date.now()}
              />
            )}

            <TextInput
              style={styles.inputField}
              label="E-mail"
              value={email}
              onChangeText={(email) => setEmail(email)}
            />
            <TextInput
              style={styles.inputField}
              label="Senha"
              value={password}
              onChangeText={(password) => setPassword(password)}
              secureTextEntry={true}
              textContentType="password"
              autoCompleteType="password"
            />
            <Button
              mode="contained"
              onPress={() => {
                signup();
              }}
              style={styles.button}
            >
              Cadastrar
            </Button>

            <Text style={styles.textBottom}>
              Ao continuar você concorda com os Termos de Serviços e com a
              Política de Privacidade da Ambev
            </Text>
          </View>
        </View>
      </ImageBackground>
    </KeyboardAwareScrollView>
  );
}

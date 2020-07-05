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
  const [nameError, setNameError] = useState();
  const [surname, setSurname] = useState();
  const [surnameError, setSurnameError] = useState();
  const [birthDate, setBirthDate] = useState(Date.now());
  const [email, setEmail] = useState();
  const [emailError, setEmailError] = useState();
  const [password, setPassword] = useState();
  const [passwordError, setPasswordError] = useState();
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const { signIn } = useContext(AuthContext);

  async function signup() {
    if (!loading) {
      try {
        setLoading(true);
        if (validateFields()) {
          const response = await api.post(`user`, {
            name,
            surname,
            birthdate: birthDate,
            email,
            password,
          });

          signIn(response.data);
        }
      } catch (error) {
        console.log(error.response.data);
        const data = error.response.data;
        if (error.response.data.notification) {
          setEmailError("Este email é inválido");
        }
      }

      setLoading(false);
    }
  }

  function validateFields() {
    if (!name) {
      setNameError("Este campo não pode estar vazio");
      return false;
    }
    if (name > 32) {
      setNameError("Este campo não pode ter mais que 32 caracteres");
      return false;
    }
    if (name < 3) {
      setNameError("Este campo não pode ter menos que 3 caracteres");
      return false;
    }

    if (!surname) {
      setSurnameError("Este campo não pode estar vazio");
      return false;
    }
    if (surname > 32) {
      setSurnameError("Este campo não pode ter mais que 32 caracteres");
      return false;
    }
    if (surname < 3) {
      setSurnameError("Este campo não pode ter menos que 3 caracteres");
      return false;
    }

    if (!email) {
      setEmailError("Este campo não pode estar vazio");
      return false;
    }
    if (email.length > 128) {
      setEmailError("Este campo não pode ter mais que 128 caracteres");
      return false;
    }
    if (email.length < 4) {
      setEmailError("Este campo não pode ter menos que 4 caracteres");
      return false;
    }

    if (!password) {
      setPasswordError("Este campo não pode estar vazio");
      return false;
    }
    if (password.length > 32) {
      setPasswordError("Este campo não pode ter mais que 32 caracteres");
      return false;
    }
    if (password.length < 6) {
      setPasswordError("Este campo não pode ter menos que 6 caracteres");
      return false;
    }

    return true;
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
              onChangeText={(name) => {
                setNameError();
                setName(name);
              }}
              error={nameError}
              errorMessage={nameError}
            />
            <TextInput
              style={styles.inputField}
              label="Sobrenome"
              value={surname}
              onChangeText={(surname) => {
                setSurnameError();
                setSurname(surname);
              }}
              error={surnameError}
              errorMessage={surnameError}
            />

            <TextInput
              style={styles.inputField}
              label="Data de nascimento"
              value={getDate()}
              onPress={() => {
                setShowModal(true);
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
              onChangeText={(email) => {
                setEmail(email);
                setEmailError();
              }}
              error={emailError}
              errorMessage={emailError}
            />
            <TextInput
              style={styles.inputField}
              label="Senha"
              value={password}
              onChangeText={(password) => {
                setPassword(password);
                setPasswordError();
              }}
              secureTextEntry={true}
              textContentType="password"
              autoCompleteType="password"
              error={passwordError}
              errorMessage={passwordError}
            />
            <Button
              mode="contained"
              onPress={() => {
                signup();
              }}
              style={styles.button}
              loading={loading}
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

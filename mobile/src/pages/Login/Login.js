import React, { useContext, useState } from "react";
import AuthContext from "../../context";

import { Text, View, ImageBackground, Image, StatusBar } from "react-native";
import { Button } from "react-native-paper";
import styles from "./LoginStyle.js";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import TextInput from "../../Components/TextInput";

export default function Login({ navigation }) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const { signIn } = useContext(AuthContext);

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={styles.main}
    >
      <ImageBackground
        source={require("../../images/login.png")}
        style={styles.container}
      >
        <StatusBar barStyle="light-content" />
        <Image
          style={styles.logo}
          source={require("../../images/friday_1.png")}
        />
        <Text style={styles.textLogin}>Login</Text>

        <View style={styles.form}>
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
            onPress={() => signIn("Arthur")}
            style={styles.button}
          >
            Entrar
          </Button>

          <Button
            mode="text"
            onPress={() => navigation.push("ForgotPassword")}
            color={"white"}
            style={styles.button}
          >
            Esqueci minha senha
          </Button>
        </View>
        <Button
          icon="arrow-left"
          mode="text"
          onPress={() => navigation.push("SignUp")}
          color={"#F4AA1D"}
          style={styles.button}
          labelStyle={styles.textButton}
        >
          cadastre-se
        </Button>
      </ImageBackground>
    </KeyboardAwareScrollView>
  );
}

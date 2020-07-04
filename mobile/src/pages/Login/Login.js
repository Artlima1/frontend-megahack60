import React, { useContext, useState } from "react";
import AuthContext from "../../context";

import { Text, View, Button, ImageBackground, StatusBar } from "react-native";
import styles from "./LoginStyle.js";

import TextInput from "../../Components/TextInput";

export default function Login({ navigation }) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const { signIn } = useContext(AuthContext);

  return (
    <ImageBackground
      source={require("../../images/login.png")}
      style={styles.container}
    >
      <StatusBar barStyle="light-content" />
      <Text>Login screen</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.inputField}
          label="E-mail"
          value={email}
          onChangeText={(email) => setEmail(email)}
        />
        <TextInput
          textInputStyle={styles.inputField}
          label="Senha"
          value={password}
          onChangeText={(password) => setPassword(password)}
          secureTextEntry={true}
          textContentType="password"
          autoCompleteType="password"
        />
      </View>

      <Button
        title="Cadastro"
        onPress={() => {
          navigation.push("SignUp");
        }}
      />
      <Button
        title="Esqueci Senha"
        onPress={() => {
          navigation.push("ForgotPassword");
        }}
      />
      <Button
        title="Entrar"
        onPress={() => {
          signIn("Arthur");
        }}
      />
    </ImageBackground>
  );
}

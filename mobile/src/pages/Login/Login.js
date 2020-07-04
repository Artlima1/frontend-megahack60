import React, { useContext } from 'react'
import AuthContext from '../../context'

import { StyleSheet, Text, View, Button } from 'react-native';


export default function Login({navigation}){

    const { signIn } = useContext(AuthContext)

    return(
        <View style={styles.container}>
            <Text>Login screen</Text>
            <Button title='Cadastro' onPress={()=>{navigation.push('SignUp')}}/>
            <Button title='Esqueci Senha' onPress={()=>{navigation.push('ForgotPassword')}}/>
            <Button title='Entrar' onPress={()=>{signIn('Arthur')}}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
});
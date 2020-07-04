import React, { useContext } from 'react'
import AuthContext from '../../context'

import { StyleSheet, Text, View, Button } from 'react-native';


export default function Profile({navigation}){
    const { signOut } = useContext(AuthContext)

    return(
        <View style={styles.container}>
            <Text>Página de Perfil</Text>
            <Button title='Bares Curtidos' onPress={()=>{navigation.push('FavBars')}}/>
            <Button title='Métodos de Pagamento' onPress={()=>{navigation.push('PaymentMethods')}}/>
            <Button title='Ajuda' onPress={()=>{navigation.push('Help')}}/>
            <Button title='Sair' onPress={()=>{signOut()}}/>
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
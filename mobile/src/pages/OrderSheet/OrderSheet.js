import React from 'react'

import { StyleSheet, Text, View, Button } from 'react-native';


export default function OrderList({navigation}){
    return(
        <View style={styles.container}>
            <Text>Comanda</Text>
            <Button title='Ler QR' onPress={()=>{navigation.push('Escanear')}}/>
            <Button title='Fazer Pedido' onPress={()=>{navigation.push('Menu')}}/>
            <Button title='Pagar Agora' onPress={()=>{navigation.push('Payment')}}/>
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
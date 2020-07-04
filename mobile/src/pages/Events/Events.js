import React from 'react'

import { StyleSheet, Text, View, Button } from 'react-native';


export default function Events({navigation}){
    return(
        <View style={styles.container}>
            <Text>Lista de Eventos</Text>
            <Button title='Bar Especifico' onPress={()=>{navigation.push('BarPage')}}/>
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
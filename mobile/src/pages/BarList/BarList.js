import React from 'react'

import { StyleSheet, Text, View, Button } from 'react-native';


export default function BarList({navigation}){
    return(
        <View style={styles.container}>
            <Text>Lista de Bares</Text>
            <Button title='Bar' onPress={()=>{navigation.push('BarPage')}}/>
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
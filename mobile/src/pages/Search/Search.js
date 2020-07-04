import React from 'react'

import { StyleSheet, Text, View, Button } from 'react-native';


export default function Search({navigation}){
    return(
        <View style={styles.container}>
            <Text>Pesquisar</Text>
            <Button title='Lista' onPress={()=>{navigation.push('BarList')}}/>
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
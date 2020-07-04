import React from 'react'

import { StyleSheet, Text, View, Button } from 'react-native';


export default function Payment({navigation}){
    return(
        <View style={styles.container}>
            <Text>Pagamento</Text>
            <Button title='Finzalizar Pagamento' onPress={()=>{navigation.push('CheckOut')}}/>
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
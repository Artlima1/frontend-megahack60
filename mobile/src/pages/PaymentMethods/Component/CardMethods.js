import React from 'react'

import {Text, View, TouchableOpacity, StyleSheet, Image} from 'react-native';
import styles from "../PaymentMethodsStyle";

import { CreditCardInput } from "react-native-input-credit-card";
 

const PagarCartao = () => (
    <View>
        <TouchableOpacity onPress={()=>{navigation.navigate('Payment')}} style={styles.buttonPagarCartao}>
            <Text style={styles.finalizarPagamentoText}>Pagar</Text>
            </TouchableOpacity>
    </View>
    );

export default function CardMethods(){
    function handleChange(form){
        console.log(form);
    }
    return(
    <View style={styles.tentando}>
        <CreditCardInput onChange={handleChange} 
        cardScale={1.2}  
        allowScroll={true}    
        inputContainerStyle={{    
            borderBottomWidth: 1,
            borderBottomColor: "black" ,
            flexDirection: 'column',
            right: 20,
            flexWrap: "wrap",
            width: 60,
            flexShrink: 1,
       }}
       inputStyle={{
        fontSize: 15,
        }}
        />
        <PagarCartao/>
    </View>
)};


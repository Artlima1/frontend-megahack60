import React from 'react'

import { Text, View, TouchableOpacity, Image } from 'react-native';
import styles from "../PaymentMethodsStyle";


const PagarDinheiro = () => (
    <View>
            <TouchableOpacity onPress={()=>{navigation.navigate('CheckOut')}} style={styles.buttonPagarDinheiro}>
                <Text style={styles.finalizarPagamentoText}>Pagar com dinheiro</Text>
            </TouchableOpacity>
    </View>
    );


export default function CashMethods(){
    return(
    <View style={styles.cashButton}>
    <Text style={styles.cashText1}>Obrigada pela visita! </Text>
    <Text style={styles.cashText2}>O garçom virá até sua mesa receber o pagamento</Text>
        <PagarDinheiro />   
    </View>
)}; 

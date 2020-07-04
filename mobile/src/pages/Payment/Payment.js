import React from 'react'
import styles from './PaymentStyle'

import { Ionicons } from '@expo/vector-icons';
import {Text, View, Button, TouchableOpacity } from 'react-native';


export default function Payment({navigation}){

    const SeusPedidosButton = ({onPress}) => (
    <TouchableOpacity onPress={onPress} style={styles.seusPedidosContainer}>
        <Ionicons name="md-clipboard" size={60} color="#FFFFFF" />
        <View style={styles.seusPedidosView}>
         <Text style={styles.seusPedidosText1}>Seus</Text><Text style={styles.seusPedidosText2}>pedidos</Text>
         </View>
    </TouchableOpacity>
    );

    const FinalizarPagamentoButton = ({onPress}) => (
        <TouchableOpacity onPress={onPress} style={styles.finalizarPagamentoContainer}>
             <Text style={styles.finalizarPagamentoText}>PAGAR</Text>
        </TouchableOpacity>
        );

    return(
        <View style={styles.container}>
            <View style={styles.paymentHeader}>
                <Text style={styles.paymentTitle}>PAGAMENTO</Text>
                <SeusPedidosButton />
            </View>
            <FinalizarPagamentoButton title='Finzalizar Pagamento' onPress={()=>{navigation.pop()}}/ >
        </View>
    )
}


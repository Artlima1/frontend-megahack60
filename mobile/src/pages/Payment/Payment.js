import React from 'react'
import styles from './PaymentStyle'

import { Ionicons, Entypo } from '@expo/vector-icons';
import {Text, View, TouchableOpacity, Button } from 'react-native';


export default function Payment({navigation}){

    const SeusPedidosButton = () => (
    <TouchableOpacity onPress={()=>{navigation.pop()}} style={styles.seusPedidosContainer}>
        <Ionicons name="md-clipboard" size={70} color="#FFFFFF"style={styles.seusPedidosIcon} />
        <View style={styles.seusPedidosView}>
         <Text style={styles.seusPedidosText}>Seus pedidos</Text>
         </View>
    </TouchableOpacity>
    );

    const FinalizarPagamentoButton = () => (
        <TouchableOpacity onPress={() => {navigation.push('CheckOut')}} style={styles.finalizarPagamentoContainer}>
             <Text style={styles.finalizarPagamentoText}>PAGAR</Text>
        </TouchableOpacity>
        );

        const ChangeMethodButton = () => (
            <TouchableOpacity  onPress={() => {navigation.push('PaymentMethods')}}>
                <Text  style={styles.changeMethod}> Mudar metódo de pagamento </Text>
            </TouchableOpacity>
          );

    return(
        < >
        <View style={styles.container}>
            <View style={styles.paymentHeader}>
                <Text style={styles.paymentTitle}>PAGAMENTO</Text>
                <SeusPedidosButton />
            </View>
            <View style={styles.grayContainer}>
                <View style={styles.grayColor} />
                <Text style={styles.totalText}> TOTAL: </Text>
                <Text style={styles.totalNumber}>
                    R$ 100,00
                </Text>
                <View style={styles.cardLine}>
                    <Entypo name="credit-card" size={30} color="#FFFFFF" style={styles.cardIcon} />
                    <View style={styles.cardLineContainer}>
                        <Text style={styles.cardNumber}>
                            *** *** *** 236
                        </Text>
                    </View>
                </View>
                <ChangeMethodButton />
                <Text style={styles.tip}>Adicionar taxa de atendimento de: </Text>
                <View style={styles.tipContainer}>
                    <View style={styles.coloredTipContainer} />
                    <Text style={styles.tipText}>R$ 5,00</Text>
                </View>
                <View><FinalizarPagamentoButton title='Finzalizar Pagamento' /></View>
            </View>
        </View>
        </>
    )
}
[]

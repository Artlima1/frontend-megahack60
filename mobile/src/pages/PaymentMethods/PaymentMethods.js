import React from 'react'

import { Text, View, TouchableOpacity } from 'react-native';
import styles from "./PaymentMethodsStyle";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { Ionicons,FontAwesome,Entypo } from '@expo/vector-icons';

const Tab = createMaterialTopTabNavigator();

function CreditCard(){
    return(
    <View>
        <Entypo name="credit-card" size={30} color="#FFFFFF" style={styles.cardIcon} />
    </View>
)};

function Money(){
    return(
    <View>
        <FontAwesome name="money" size={24} color="white" />
    </View>
)}; 

export default function PaymentMethods(){

    const SeusPedidosButton = () => (
        <TouchableOpacity onPress={() => {navigation.push("CheckOut")}} style={styles.seusPedidosContainer}>
        <Ionicons name="md-clipboard" size={70} color="#FFFFFF"style={styles.seusPedidosIcon} />
        <View style={styles.seusPedidosView}>
            <Text style={styles.seusPedidosText}>Seus pedidos</Text>
         </View>
    </TouchableOpacity>
    );

    return(
        <>
        <View style={styles.container}>
            <View style={styles.paymentMethodsHeader}>
                <Text style={styles.paymentMethodsTitle}>PAGAMENTO</Text>
                <SeusPedidosButton  component={SeusPedidosButton}/>
            </View>
            <View style={styles.grayContainer}>
                <View style={styles.grayColor} />
                  <Tab.Navigator 
                    tabBarOptions={{
                        labelStyle: { fontSize: 12 },
                        tabStyle: { width: 100 },
                        style: { backgroundColor: 'powderblue' },
                      }}>
                      <Tab.Screen name="CreditCard" component={CreditCard} />
                     <Tab.Screen name="Money" component={Money} />
                   </Tab.Navigator>
            </View>
        </View>
        </>
    )
}


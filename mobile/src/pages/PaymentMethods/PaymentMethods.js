import React from 'react'

import { Text, View, TouchableOpacity, Image } from 'react-native';
import styles from "./PaymentMethodsStyle";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useNavigation } from '@react-navigation/native';

import CashMethods from './Component/CashMethods'
import CardMethods from './Component/CardMethods'

import { Ionicons } from '@expo/vector-icons';

const Tab = createMaterialTopTabNavigator();


export default function PaymentMethods(){
    const navigation = useNavigation();
    const SeusPedidosButton = () => (
        <TouchableOpacity onPress={() => {navigation.navigate('Comanda')}} style={styles.seusPedidosContainer}>
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

                  <Tab.Navigator 
                        style={styles.tabContainer}
                          screenOptions={({ route }) => ({
                            tabBarIcon: ({ focused, color}) => {
                              let iconName;
                  
                              if (route.name === 'CreditCard') {
                                iconName = focused ? 'ios-card' : 'ios-card'
                              } else if (route.name === 'Money') {
                                iconName = focused 
                                    ? "ios-cash"
                                    : "ios-cash";
                              }


                              return <Ionicons name={iconName} size={26} color={color} />;
                            },
                          })}
                          tabBarOptions={{
                            activeTintColor: '#F4AA1D',
                            inactiveTintColor: 'gray',
                            showLabel: false,
                            showIcon: 'true',
                            style: {
                                backgroundColor: 'white',
                            },
                          }}
                        >
                      <Tab.Screen name="CreditCard" component={CardMethods}  />
                     <Tab.Screen name="Money" component={CashMethods}/>
                   </Tab.Navigator>
                   <View style={styles.blackLine}><Image source={require("../../images/friday_1.png")} style={styles.logoCash}/></View>
            </View>
        </>
    )
}



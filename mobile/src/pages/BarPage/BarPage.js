import React from 'react'

import { Text, View, Image, StatusBar } from 'react-native';

import styles from './BarPageStyle'

import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import Stars from 'react-native-stars';

export default function ParPage(){
    return(
        <View style={styles.container}>

            <StatusBar barStyle="light-content"/>

            <View style={styles.header}>
                <View style={styles.backAndName}>
                    <Ionicons name="ios-arrow-back" size={60} color="#F4AA1D" />
                    <Text style={styles.barName}>The House</Text>
                </View>
                <View style={styles.clientes}>
                    <FontAwesome name="users" size={24} color="black" />
                    <Text>24 Pessoas</Text>
                </View>
            </View>

            <View style={styles.pictures}>
                <Image style={styles.barImg} source={require('../../images/bar.png')} />
            </View>

            <View style={styles.stars}>
                <Stars
                    display={3.67}
                    spacing={8}
                    count={5}
                    starSize={40}
                    fullStar= {require('../../images/starFilled.png')}
                    emptyStar= {require('../../images/starEmpty.png')}
                />
            </View>

            <View style={styles.tabBar}>
                <Text>DESCRIÇÃO</Text>
                <Text>NOTAS</Text>
                <Text>CARDÁPIO</Text>
                <Text>COMENTÁRIOS</Text>
            </View>

            <View style={styles.info}>

            </View>

        </View>
    )
}
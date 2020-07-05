import React from 'react'

import { Header, Text, View, Button } from 'react-native';
import styles from "./EventsStyle.js";
import { MaterialIcons, Ionicons } from '@expo/vector-icons';
import { IconButton, Avatar, Card, Title, Paragraph } from "react-native-paper";
import Stars from 'react-native-stars';

export default function Events({ navigation }) {
    return (
        <View style={styles.content}>
            <View style={styles.header}>
                <View style={styles.button}>
                    <MaterialIcons
                        name="place"
                        size={30}
                        color="white" />
                    <Button color="#ffff"
                        alignSelf='flex-start'
                        title='Perto de você'
                        onPress={() => { }} />
                    <IconButton
                        style={styles.iconButton}
                        icon="qrcode-scan"
                        color="white"
                        size={20}
                        onPress={() => { }}
                    />
                </View>
                <Text style={{
                    color: '#fff',
                    textAlign: 'center',
                    fontSize: 35,
                    fontWeight: "bold"
                }}>{'\n'}PROMOÇÕES</Text>
            </View>
            <View style={styles.container}>
                <Card style={{marginBottom:190}}>
                    <Card.Cover source={require("../../images/promo.png")} />
                    <Card.Content>
                        <View style={styles.legendCard}>
                            <View style={styles.stars}>
                                <Stars
                                    
                                    display={3.67}
                                    spacing={8}
                                    count={5}
                                    starSize={25}
                                    fullStar={require('../../images/starFilled.png')}
                                    emptyStar={require('../../images/starEmpty.png')}
                                />
                            </View>
                            <View style={styles.peopleIcon}>
                                <Ionicons
                                    name="ios-people"
                                    size={40}
                                    color="#757575"/>
                                <Text style={{color: '#757575', fontWeight: "bold", fontSize: 10}}>84 pessoas</Text>
                            </View>
                        </View>
                    </Card.Content>
                </Card>
                <Text>Lista de Eventos</Text>
                <Button title='Bar Especifico' onPress={() => { navigation.push('BarPage') }} />
            </View>
        </View>
    );
};


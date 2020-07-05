import React, { useState } from 'react';

import { Text, TextInput, View, Button, ImageBackground, StatusBar, Image } from "react-native";
import styles from "./CheckOutStyle.js";
import Stars from 'react-native-stars';


export default function CheckOut() {
    const [text, setText] = useState('');
    return (
        <ImageBackground
            source={require("../../images/login.png")}
            style={styles.container}
        >
            <View style={styles.background}>
                <Text style={{ textAlign: 'center', fontWeight: 'bold' }}>Obrigado por comprar conosco,
                espere o garçom chegar com sua nota fiscal
                e a sessão será encerrada automaticamente!{"\n"}
                </Text>
                <Text>Deixar avaliação para o bar do Manolo</Text>
                <View style={styles.evaluation}>
                    <Text>Higiene e Limpeza:</Text>
                    <View style={styles.stars}>
                        <Stars
                            half={true}
                            default={2.5}
                            update={(val) => { this.setState({ stars: val }) }}
                            spacing={4}
                            starSize={30}
                            count={5}
                            fullStar={require('../../images/starFilled.png')}
                            emptyStar={require('../../images/starEmpty.png')}
                            halfStar={require('../../images/starHalf.png')}
                        />
                    </View>
                </View>
                <View style={styles.evaluation}>
                    <Text>Espaço:</Text>
                    <View style={styles.stars}>
                        <Stars
                            half={true}
                            default={2.5}
                            update={(val) => { this.setState({ stars: val }) }}
                            spacing={4}
                            starSize={30}
                            count={5}
                            fullStar={require('../../images/starFilled.png')}
                            emptyStar={require('../../images/starEmpty.png')}
                            halfStar={require('../../images/starHalf.png')}
                        />
                    </View>
                </View>
                <View style={styles.evaluation}>
                    <Text>Qualidade dos Produtos:</Text>
                    <View style={styles.stars}>
                        <Stars
                            half={true}
                            default={2.5}
                            update={(val) => { this.setState({ stars: val }) }}
                            spacing={4}
                            starSize={30}
                            count={5}
                            fullStar={require('../../images/starFilled.png')}
                            emptyStar={require('../../images/starEmpty.png')}
                            halfStar={require('../../images/starHalf.png')}
                        />
                    </View>
                </View>
                <View style={styles.evaluation}>
                    <Text>Higiene e Limpeza:</Text>
                    <View style={styles.stars}>
                        <Stars
                            half={true}
                            default={2.5}
                            update={(val) => { this.setState({ stars: val }) }}
                            spacing={4}
                            starSize={30}
                            count={5}
                            fullStar={require('../../images/starFilled.png')}
                            emptyStar={require('../../images/starEmpty.png')}
                            halfStar={require('../../images/starHalf.png')}
                        />
                    </View>
                </View>
                <View style={styles.evaluation}>
                    <Text>Preço:</Text>
                    <View style={styles.stars}>
                        <Stars
                            half={false}
                            default={2.5}
                            update={(val) => { this.setState({ stars: val }) }}
                            spacing={4}
                            starSize={30}
                            count={5}
                            fullStar={require('../../images/moneyFilled.png')}
                            emptyStar={require('../../images/moneyEmpty.png')}
                        // halfStar={require('../../images/moneyHalf.png')}
                        />
                    </View>
                </View>

                <View style={{ padding: 10, margin: 10 }}>
                    <TextInput
                        style={{ height: 40 }}
                        placeholder="Comente aqui sobre a sua experiência!"
                        onChangeText={text => setText(text)}
                        defaultValue={text}
                    />
                </View>

            </View>
        </ImageBackground>
    );
}
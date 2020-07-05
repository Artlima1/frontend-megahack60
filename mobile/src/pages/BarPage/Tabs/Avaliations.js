import React from 'react'

import { Text, View, Image, StyleSheet } from 'react-native';

import Stars from 'react-native-stars';
import { MaterialIcons } from '@expo/vector-icons';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000'
    },
    grayContainer: {
        backgroundColor: '#2A2A2A',
        margin: 20,
        padding: 20,
        borderRadius: 15,
    },
    categoryColumn: {
        marginVertical: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    moneyArray: {
        flexDirection: 'row'
    },
    categoryText:{
        color: '#ffffff'
    }
})

export default function Avaliations({avaliation}){
    


    return(
        <View style={styles.container}>

            <View style={styles.grayContainer}>

                <View style={styles.categoryColumn}>
                    <Text style={styles.categoryText}>HIGIENE:</Text>
                    <Stars
                        display={avaliation.bar_cleaning}
                        spacing={8}
                        count={5}
                        starSize={20}
                        fullStar= {require('../../../images/starFilled.png')}
                        emptyStar= {require('../../../images/starEmpty.png')}
                    />
                </View>
                
                <View style={styles.categoryColumn}>
                    <Text style={styles.categoryText}>ESPAÇO:</Text>
                    <Stars
                        display={avaliation.bar_space}
                        spacing={8}
                        count={5}
                        starSize={20}
                        fullStar= {require('../../../images/starFilled.png')}
                        emptyStar= {require('../../../images/starEmpty.png')}
                    />
                </View>

                <View style={styles.categoryColumn}>
                    <Text style={styles.categoryText}>BEBIDA:</Text>
                    <Stars
                        display={avaliation.bar_drinks}
                        spacing={8}
                        count={5}
                        starSize={20}
                        fullStar= {require('../../../images/starFilled.png')}
                        emptyStar= {require('../../../images/starEmpty.png')}
                    />
                </View>

                <View style={styles.categoryColumn}>
                    <Text style={styles.categoryText}>COMIDA:</Text>
                    <Stars
                        display={avaliation.bar_food}
                        spacing={8}
                        count={5}
                        starSize={20}
                        fullStar= {require('../../../images/starFilled.png')}
                        emptyStar= {require('../../../images/starEmpty.png')}
                    />
                </View>

                <View style={styles.categoryColumn}>
                    <Text style={styles.categoryText}>ATENDIMENTO:</Text>
                    <Stars
                        display={avaliation.bar_service}
                        spacing={8}
                        count={5}
                        starSize={20}
                        fullStar= {require('../../../images/starFilled.png')}
                        emptyStar= {require('../../../images/starEmpty.png')}
                    />
                </View>

                <View style={styles.categoryColumn}>
                    <Text style={styles.categoryText}>PREÇO:</Text>
                    <View style={styles.moneyArray}>
                        {[...Array(avaliation.bar_price)].map(()=>{
                            return <MaterialIcons name="monetization-on" size={24} color="#2D9235" />
                        })}
                    </View>
                </View>

            </View>
        </View>
    )
}
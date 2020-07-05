import React from 'react'

import { Text, View, Button, Image } from 'react-native';

import styles from './SearchStyle';

import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons'; 

export default function Search({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.headerTop}>
                    <View style={styles.topGroup}>
                        <MaterialIcons name="location-on" size={20} color="white" />
                        <Text style={styles.whiteLink}>Perto de você</Text>
                    </View>
                    <MaterialCommunityIcons style={styles.qr} name="qrcode-scan" size={30} color="white" />
                </View>
                <View style={styles.headerBottom}>
                    <Text style={styles.title}>ORDENAR POR:</Text>
                </View>
            </View>
            <View style={styles.content}>
                <View style={styles.filters}>
                    <View>
                        <View style={styles.innerCircle}>
                            <MaterialCommunityIcons name="sort-alphabetical" size={60} color="black" />
                        </View>
                        <Text style={styles.categText}>Bares A - Z</Text>
                    </View>
                    <View>
                        <View style={styles.innerCircle}>
                           <Entypo name="location" size={50} color="black" />
                        </View>
                        <Text style={styles.categText}>Distância</Text>
                    </View>
                    <View>
                        <View style={styles.innerDCircle}>
                           <FontAwesome name="dollar" size={50} color="black" />
                        </View>
                        <Text style={styles.categText}>Preço</Text>
                    </View>
                    <View>
                        <View style={styles.innerDCircle}>
                           <Entypo name="thumbs-up" size={50} color="black" />
                        </View>
                        <Text style={styles.categText}>Atendimento</Text>
                    </View>
                    <View>
                        <View style={styles.innerDCircle}>
                           <MaterialCommunityIcons name="water-pump" size={50} color="black" />
                        </View>
                        <Text style={styles.categText}>Higiene</Text>
                    </View>
                    <View>
                        <View style={styles.innerDCircle}>
                           <MaterialIcons name="star" size={60} color="black" />
                        </View>
                        <Text style={styles.categText}>Estrelas</Text>
                    </View>
                    <View>
                        <View style={styles.innerDCircle}>
                           <MaterialIcons name="people" size={60} color="black" />
                        </View>
                        <Text style={styles.categText}>Lotação</Text>
                    </View>
                    <View>
                        <View style={styles.innerDCircle}>
                           <Fontisto name="fire" size={50} color="black" />
                        </View>
                        <Text style={styles.categText}>Destaque</Text>
                    </View>
                    <View>
                        <View style={styles.innerDCircle}>
                           <MaterialCommunityIcons name="flag-plus" size={60} color="black" />
                        </View>
                        <Text style={styles.categText}>LGBTQ+</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}
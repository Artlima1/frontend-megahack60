import React from 'react'

import { Text, View, Image, StyleSheet, ImagePropTypes } from 'react-native';

import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const styles = StyleSheet.create({
    backgroundBlack:{
        backgroundColor: 'black',
        padding: 10
    },
    infoRow:{
        flexDirection: 'row',
        margin: 10,
        alignItems: 'center'
    },
    infoText:{
        marginLeft: 10,
        color: '#fff',
    },
    descriptionConatiner: {
        backgroundColor: '#2C2C2C',
        width: 350, 
        borderRadius: 12,
        padding: 20,
        alignSelf: 'center',
        marginBottom: 15,
        opacity: 0.8
    },
    descriptionText: {
        color: '#fff'
    }
})

export default function Description({bar}){
    return(
        <View style={styles.backgroundBlack}>
            <View style={styles.infoRow}>
                <MaterialIcons name="pin-drop" size={24} color="#F4AA1D" />
                <Text style={styles.infoText}>
                    { bar.street } { bar.number }, { bar.city }
                </Text>
            </View>
            <View style={styles.infoRow}>
                <MaterialCommunityIcons name="clock" size={24} color="#F4AA1D" />
                <View style={styles.times}>
                   <Text style={styles.infoText}>Seg, Sex, Sab: 19h - 24h</Text>
                   <Text style={styles.infoText}>Ter, Qua, dom: 14h - 20h</Text>
                   <Text style={styles.infoText}>Seg, Sex, Sab: 19h - 24h</Text>
                </View>
            </View>

            <View style={styles.descriptionConatiner}>
                <Text style={styles.descriptionText}>
                    {bar.description}
                </Text>
            </View>
        </View>
    )
}


import React, { useContext } from 'react'
import AuthContext from '../../context'

import styles from './ProfileStyle'

import { Text, View, Button, TouchableOpacity, Image } from 'react-native';


export default function Profile({navigation}){
    const { signOut } = useContext(AuthContext)

const ProfileButtons = ({onPress, title}) => (
    <TouchableOpacity onPress={onPress} style={styles.optionsButtonContainer}>
            <Text style={styles.optionsButtonText}>{title}</Text>
    </TouchableOpacity>
);


    return(
        <View style={styles.container}>
                <View style={styles.profileHeader}> 
                    <Text style={styles.profileTitle}>PERFIL</Text>
                </View>

                <View style={styles.userStyle}>
                    <Text style={styles.userText}>Tabata Silva Carneiro</Text>
                    <Image style={styles.userImage} source={require('../../images/userImage.png')} />
                </View>

                <View style={styles.optionsStyle}> 
                    <ProfileButtons  title='Bares Curtidos' onPress={()=>{navigation.push('FavBars')}}/>
                    <ProfileButtons title='Métodos de Pagamento' onPress={()=>{navigation.push('PaymentMethods')}}/>
                    <ProfileButtons title='Ajuda' onPress={()=>{navigation.push('Help')}}/>
                    <ProfileButtons title='Sair' onPress={()=>{signOut()}}/>
                </View>

                <Image style={styles.logoImage} source={require('../../images/logo.png')} />
        </View>
    )
}









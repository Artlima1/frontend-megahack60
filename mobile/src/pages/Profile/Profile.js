import React, { useContext } from 'react'
import AuthContext from '../../context'

import { AntDesign, Entypo, Ionicons, Foundation } from '@expo/vector-icons';
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

            <View style={styles.profileButtons}>
                <AntDesign name="heart" size={24} color="#FFFFFF" style={styles.heartIcon} />
                <ProfileButtons  title='Bares Curtidos' onPress={()=>{navigation.push('FavBars')}}/> 
                <Text style={styles.text}>Ver meus bares curtidos</Text>
                <View style={styles.whiteDivider} />

                <Entypo name="credit-card" size={24} color="#FFFFFF" style={styles.cardIcon} />
                <ProfileButtons title='Métodos de Pagamento' onPress={()=>{navigation.push('PaymentMethods')}}/>
                <Text style={styles.text}>Meus métodos de pagamentos</Text>
                <View style={styles.whiteDivider} />

                <Foundation name="alert" size={24} color="#FFFFFF" style={styles.alertIcon} />
                <ProfileButtons title='FAQ' onPress={()=>{navigation.push('FAQ')}}/>
                <Text style={styles.text}>Perguntas mais frequentes</Text>
                <View style={styles.whiteDivider} />

                <Entypo name="help-with-circle" size={24} color="#FFFFFF" style={styles.helpIcon} />
                <ProfileButtons title='Ajuda' onPress={()=>{navigation.push('Help')}}/>
                <Text style={styles.text}>Aperte em caso de assédio e notifique o bar</Text>
                <View style={styles.whiteDivider} />

                <Ionicons name="md-exit" size={24} color="#FFFFFF" style={styles.exitIcon} />
                <ProfileButtons title='Sair' onPress={()=>{signOut()}}/>
                <Text style={styles.text}>Ver meus bares curtidos</Text>
                <View style={styles.whiteDivider} />

                <Image style={styles.logoImage} source={require('../../images/logo.png')} />
            </View>
        </View>
    )
}









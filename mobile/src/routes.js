import React, { useState, useEffect, useMemo } from 'react'
import AuthContext from './context'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const LoginStack = createStackNavigator();
const MenuBottomTab = createBottomTabNavigator();

const EventsStack = createStackNavigator();
const SearchStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const OrderSheetStack = createStackNavigator();


import Login from './pages/Login'
import SignUp from './pages/SignUp'
import ForgotPassword from './pages/ForgotPassword'
import Events from './pages/Events'
import BarPage from './pages/BarPage'
import Search from './pages/Search'
import BarList from './pages/BarList'
import Profile from './pages/Profile'
import FavBars from './pages/FavBars'
import PaymentMethods from './pages/PaymentMethods'
import Help from './pages/Help'
import QRScanner from './pages/QRScanner'
import OrderSheet from './pages/OrderSheet'
import Menu from './pages/Menu'
import Payment from './pages/Payment'
import CheckOut from './pages/CheckOut'



export default function Routes(){

    const [user, setUser] = useState(null)

    const authContext = useMemo(()=>{
        return {
            signIn: (user)=>{
                setUser(user)
            },
            signOut: ()=>{
                setUser(null)
            },
        }
    }, [])


    return (
        <AuthContext.Provider value={authContext}>
            <NavigationContainer>
                {user? 
                    <HomeRouter/>
                :
                    <LoginNavegator/>
                }
            </NavigationContainer>
        </AuthContext.Provider>
    )
}

function LoginNavegator(){
    return (
        <LoginStack.Navigator headerMode='none'>

            <LoginStack.Screen name='Login' component={Login}/>
            <LoginStack.Screen name='SignUp' component={SignUp}/>
            <LoginStack.Screen name='ForgotPassword' component={ForgotPassword}/>

        </LoginStack.Navigator>
    )
}

function HomeRouter(){

    return(
        <MenuBottomTab.Navigator headerMode='none'>

            <MenuBottomTab.Screen name='Destaques' component={EventsRouter} />
            <MenuBottomTab.Screen name='Procurar' component={SeachRouter} />
            <MenuBottomTab.Screen name='Perfil' component={ProfileRouter} />
            <MenuBottomTab.Screen name='Comanda' component={OrderSheetRouter} />

        </MenuBottomTab.Navigator>
    )
}

function EventsRouter(){
    return(
        <EventsStack.Navigator headerMode='none'>
            <EventsStack.Screen name='Events' component={Events}/>
            <EventsStack.Screen name='BarPage' component={BarPage}/>
        </EventsStack.Navigator>
    )
}

function SeachRouter(){
    return(
        <SearchStack.Navigator headerMode='none'>
            <SearchStack.Screen name='Search' component={Search}/>
            <SearchStack.Screen name='BarList' component={BarList}/>
            <SearchStack.Screen name='BarPage' component={BarPage}/>
        </SearchStack.Navigator>
    )
}

function ProfileRouter(){
    return(
        <ProfileStack.Navigator headerMode='none'>
            <ProfileStack.Screen name='Perfil' component={Profile}/>
            <ProfileStack.Screen name='FavBars' component={FavBars}/>
            <ProfileStack.Screen name='PaymentMethods' component={PaymentMethods}/>
            <ProfileStack.Screen name='Help' component={Help}/>
        </ProfileStack.Navigator>
    )
}

function OrderSheetRouter(){
    return(
        <OrderSheetStack.Navigator headerMode='none'>
            <OrderSheetStack.Screen name='Comanda' component={OrderSheet}/>
            <OrderSheetStack.Screen name='Escanear' component={QRScanner}/>
            <OrderSheetStack.Screen name='Menu' component={Menu}/>
            <OrderSheetStack.Screen name='Payment' component={Payment}/>
            <OrderSheetStack.Screen name='CheckOut' component={CheckOut}/>
        </OrderSheetStack.Navigator>
    )
}
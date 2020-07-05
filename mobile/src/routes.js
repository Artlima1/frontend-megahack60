import React, { useState, useEffect, useMemo } from "react";
import AuthContext from "./context";
import OrderSheetContext from "./contextOrderSheet";

import {
  NavigationContainer,
  DefaultTheme,
  useNavigation,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";

const LoginStack = createStackNavigator();
const MenuBottomTab = createBottomTabNavigator();

const EventsStack = createStackNavigator();
const SearchStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const OrderSheetStack = createStackNavigator();

import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import ForgotPassword from "./pages/ForgotPassword";
import Events from "./pages/Events";
import BarPage from "./pages/BarPage";
import Search from "./pages/Search";
import BarList from "./pages/BarList";
import Profile from "./pages/Profile";
import FavBars from "./pages/FavBars";
import PaymentMethods from "./pages/PaymentMethods";
import Help from "./pages/Help";
import QRScanner from "./pages/QRScanner";
import OrderSheet from "./pages/OrderSheet";
import Menu from "./pages/Menu";
import Payment from "./pages/Payment";
import CheckOut from "./pages/CheckOut";
import api from "./Services/api";
import { AsyncStorage } from "react-native";
import { IconButton } from "react-native-paper";

export default function Routes() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    async function getData() {
      let data = await AsyncStorage.getItem(`@friday:data`);

      data = JSON.parse(data);

      if (data && data !== null) {
        api.interceptors.request.use(
          (config) => {
            const token = data.accessToken;
            if (token && token !== " ")
              config.headers.authorization = `Bearer ${token}`;

            return config;
          },
          (error) => Promise.reject(error)
        );
        setUser(data);
      }
    }
    getData();
  }, []);

  const authContext = useMemo(() => {
    return {
      signIn: (user) => {
        setUser(user);
        AsyncStorage.setItem(`@friday:data`, JSON.stringify(user));
        api.interceptors.request.use(
          (config) => {
            const token = user.accessToken;
            if (token && token !== " ")
              config.headers.authorization = `Bearer ${token}`;

            return config;
          },
          (error) => Promise.reject(error)
        );
      },
      signOut: () => {
        setUser(null);
        AsyncStorage.removeItem(`@friday:data`);
      },
    };
  }, []);

  const MyTheme = {
    ...DefaultTheme,
    dark: true,
    colors: {
      ...DefaultTheme.colors,
      primary: "#F4AA1D",
      card: "#1D1D1D",
      text: "white",
      border: "#131313",
    },
  };

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer theme={MyTheme}>
        {user ? <HomeRouter /> : <LoginNavegator />}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}

function LoginNavegator() {
  return (
    <LoginStack.Navigator headerMode="none">
      <LoginStack.Screen name="Login" component={Login} />
      <LoginStack.Screen name="SignUp" component={SignUp} />
      <LoginStack.Screen name="ForgotPassword" component={ForgotPassword} />
    </LoginStack.Navigator>
  );
}

function HomeRouter() {
  return (
    <MenuBottomTab.Navigator headerMode="none">
      <MenuBottomTab.Screen
        name="Destaques"
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <MaterialIcons name="store" size={size} color={color} />
          ),
        }}
        component={EventsRouter}
      />
      <MenuBottomTab.Screen
        name="Procurar"
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <MaterialIcons name="search" size={size} color={color} />
          ),
        }}
        component={SeachRouter}
      />
      <MenuBottomTab.Screen
        name="Perfil"
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <MaterialIcons name="account-circle" size={size} color={color} />
          ),
        }}
        component={ProfileRouter}
      />
      <MenuBottomTab.Screen
        name="Comanda"
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <MaterialIcons name="description" size={size} color={color} />
          ),
        }}
        component={OrderSheetRouter}
      />
    </MenuBottomTab.Navigator>
  );
}

function EventsRouter() {
  const navigation = useNavigation();
  return (
    <EventsStack.Navigator>
      <EventsStack.Screen
        name="Events"
        options={{
          title: "Eventos",
          headerRight: (props) => {
            return (
              <IconButton
                icon="qrcode-scan"
                color="white"
                size={35}
                onPress={() => {
                  navigation.navigate("Comanda");
                }}
              />
            );
          },
        }}
        component={Events}
      />
      <EventsStack.Screen
        name="BarPage"
        options={{ headerShown: false }}
        component={BarPage}
      />
    </EventsStack.Navigator>
  );
}

function SeachRouter() {
  return (
    <SearchStack.Navigator headerMode="none">
      <SearchStack.Screen name="Search" component={Search} />
      <SearchStack.Screen name="BarList" component={BarList} />
      <SearchStack.Screen name="BarPage" component={BarPage} />
    </SearchStack.Navigator>
  );
}

function ProfileRouter() {
  return (
    <ProfileStack.Navigator headerMode="none">
      <ProfileStack.Screen name="Perfil" component={Profile} />
      <ProfileStack.Screen name="FavBars" component={FavBars} />
      <ProfileStack.Screen name="PaymentMethods" component={PaymentMethods} />
      <ProfileStack.Screen name="Help" component={Help} />
    </ProfileStack.Navigator>
  );
}

function OrderSheetRouter() {
  const [order, setOrder] = useState();

  const orderSheetContext = useMemo(() => {
    return {
      setOderSheet: (OrderSheet) => {
        setOrder(OrderSheet);
      },
      getOrder: () => {
        return order;
      },
    };
  }, [order]);

  return (
    <OrderSheetContext.Provider value={orderSheetContext}>
      <OrderSheetStack.Navigator headerMode="none">
        {!order && (
          <OrderSheetStack.Screen name="Escanear" component={QRScanner} />
        )}
        <OrderSheetStack.Screen name="Comanda" component={OrderSheet} />
        <OrderSheetStack.Screen name="Menu" component={Menu} />
        <OrderSheetStack.Screen name="Payment" component={Payment} />
        <OrderSheetStack.Screen name="CheckOut" component={CheckOut} />
      </OrderSheetStack.Navigator>
    </OrderSheetContext.Provider>
  );
}

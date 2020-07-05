import React, { useEffect, useState } from 'react'

import { SafeAreaView, ScrollView } from 'react-native';

import _BarList from '../../Components/Barlist';
import api from '../../Services/api';

import styles from './BarListStyle';

import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';

export default function BarList({ navigation, route }) {
    const [data, setData] = useState([]);
    let { query } = route.params;
    let _location = { lat: null, long: null, err: false };

    useEffect(() => {
        const getLocationAsync = async () => {
            let { status } = await Permissions.askAsync(Permissions.LOCATION);
            if (status !== 'granted') {
                return ({ lat: null, long: null, err: false });
            }
            let location = await Location.getCurrentPositionAsync({ accuracy: Location.Accuracy.Highest });
            const { latitude, longitude } = location.coords
            console.log("Your location: " + latitude + " . " + longitude);
            return ({ lat: latitude, long: longitude, err: false });
        };

        const execute = async () => {
            _location = await getLocationAsync();
            console.log(_location.lat + " . " + _location.long);
            if (query !== undefined) {
                console.log("query defined");
                console.log(query);
                let response = await api.get(`bar?lat=${_location.lat}&long=${_location.long}&` + query + `=${true}`);
                setData(response.data);
            } else {
                console.log("query undefined");
                console.log(query);
                let response = await api.get(`bar?lat=${_location.lat}&long=${_location.long}`);
                setData(response.data);
            }
        }
        execute();
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <_BarList bars={data} />
            </ScrollView>
        </SafeAreaView>
    )
}
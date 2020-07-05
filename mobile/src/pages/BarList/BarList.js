import React, { useEffect, useState } from 'react'

import { StyleSheet, Text, View, Button, ScrollView, SafeAreaView } from 'react-native';

import _BarList from '../../Components/Barlist';
import api from '../../Services/api';

import styles from './BarListStyle';

export default function BarList({ navigation, route }) {
    const [data, setData] = useState([]);
    let { query } = route.params;

    useEffect(() => {
        if (query !== undefined) {
            console.log("query defined");
            console.log(query);
            const lat = 10;
            const long = 10;
            api.get(`bar?lat=${lat}&long=${long}&` + query + `=${true}`).then((response) =>{
                setData(response.data);
            });
        } else {
            console.log("query undefined");
            console.log(query);
            api.get(`bar?lat=${lat}&long=${long}`).then((response) =>{
                setData(response.data);
            });
        }
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <_BarList bars={data}/>
            </ScrollView>
        </SafeAreaView>
    )
}
import React, { useState, useEffect } from "react";
import api from "../../Services/api";

import { Image, Text, View, TouchableHighlight, ScrollView } from "react-native";


import styles from './MenuStyle'

import { Ionicons } from '@expo/vector-icons';
import Modal from 'react-native-modal';
import ModalContent from './Components/ModalContent'


export default function Menu({navigation, route}){
    const { bar_id } = route.params
    const [products, setProducts] = useState([])
    const [modalFlag, setModalFlag] = useState(false)
    const [selectedProduct, setSelectedProduct] = useState()
    const [portions, setPortions] = useState([])
    const [drinks, setDrinks] = useState([])
    const [deserts, setDeserts] = useState([])
    const [currentMenu, setCurrentMenu] = useState()

    useEffect(()=>{
        api.get(`menu/${bar_id}`).then((response) => {
            setPortions(makeCategArray('portion', response.data))
            setDeserts(makeCategArray('desert', response.data))
            setDrinks(makeCategArray('drink', response.data))
            setCurrentMenu({
                tab: 'portions',
                menu: portions
            })
        }).catch(error=>{
            console.log(error)
        })
    },[])

    useEffect(()=>{
        console.log('drinks: ')
        console.log(drinks)
    },[drinks])

    function getMenu(bar_id){
    };

    function getTotalPrice(totalSum) {
        return Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(totalSum);
    }

    function makeCategArray(categ, searchProducts){
        console.log(searchProducts)
        const array = []
        searchProducts.map((product)=>{
            if(product.category===categ){
                array.push(product)
            }
        })
        return array
    }

    function selectTab(tabName){

        if(tabName==='portions'){
            setCurrentMenu({
                tab: 'portions',
                menu: portions
            })
        }

        if(tabName==='drinks'){
            setCurrentMenu({
                tab: 'drinks',
                menu: drinks
            })
        }

        if(tabName==='deserts'){
            setCurrentMenu({
                tab: 'deserts',
                menu: deserts
            })
        }

    }

    function selectProduct(product){
        setModalFlag(true)
        setSelectedProduct(product)
    }

    return(
        <View>
            <Modal isVisible={modalFlag}>
                <ModalContent product={selectedProduct} setModalFlag={setModalFlag} navigation={navigation}/>
            </Modal>
        
            <View style={styles.header}>
                <Text style={styles.barName}>The House</Text>
                <TouchableHighlight onPress={()=>{navigation.pop()}}>
                    <View style={styles.goBackConatainer}>
                        <Ionicons name="ios-arrow-back" size={40} color="#ffffff"/>
                        <View>
                            <Text style={styles.goBackText}>Seus</Text>
                            <Text style={styles.goBackText}>Pedidos</Text>
                        </View>
                    </View>
                </TouchableHighlight>
            </View>

            <View style={styles.background}>
                <View style={styles.tabsContainer}>
                    {
                        portions &&
                        <TouchableHighlight onPress={()=>{selectTab('portions')}}>
                            {
                                (currentMenu !== undefined) && 
                                (currentMenu.tab==='portions') ?
                                <View style={styles.tabHighlight}>
                                    <Text style={styles.tabText}>Porções</Text>
                                </View>
                                :
                                <View style={styles.tabNormal}>
                                    <Text style={styles.tabText}>Porções</Text>
                                </View>
                            }
                        </TouchableHighlight>
                    }
                    {
                        drinks &&
                        <TouchableHighlight onPress={()=>{selectTab('drinks')}}>
                            {
                                (currentMenu !== undefined) &&
                                (currentMenu.tab==='drinks') ?
                                <View style={styles.tabHighlight}>
                                    <Text style={styles.tabText}>Drinks</Text>
                                </View>
                                :
                                <View style={styles.tabNormal}>
                                    <Text style={styles.tabText}>Drinks</Text>
                                </View>
                            }
                        </TouchableHighlight>
                    }
                    {
                        deserts &&
                        <TouchableHighlight onPress={()=>{selectTab('deserts')}}>
                            {
                                (currentMenu !== undefined) &&
                                (currentMenu.tab==='deserts') ?
                                <View style={styles.tabHighlight}>
                                    <Text style={styles.tabText}>Sobremesas</Text>
                                </View>
                                :
                                <View style={styles.tabNormal}>
                                    <Text style={styles.tabText}>Sobremesas</Text>
                                </View>
                            }
                        </TouchableHighlight>
                    }
                </View>
                <ScrollView style={styles.menuContainer}>
                    {
                        (currentMenu !== undefined) &&
                        currentMenu.menu.map(product=>{
                            return (
                                <View>
                                    <TouchableHighlight onPress={()=>{selectProduct(product)}}>
                                    <View style={styles.productContainer}>
                                        <Image source={{ uri: `https://drive.google.com/uc?id=${product.image_id}` }} style={{width: 100, height: 100, borderRadius: 15}} />
                                        <View style={styles.infoContainer}>
                                            <Text style={styles.productName}>{product.name}</Text>
                                            <Text style={styles.productDescription}>{product.description}</Text>
                                            <Text style={styles.productPrice}>{getTotalPrice(product.price)}</Text>
                                        </View>
                                    </View>
                                    </TouchableHighlight>
                                    <View style={styles.menuDivider}/>
                                </View>
                            )
                        })
                    }
                </ScrollView>
            </View>
        </View>
    );
}
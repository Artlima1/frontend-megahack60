import React, { useState } from "react";

import { Image, Text, View, TouchableHighlight, ScrollView } from "react-native";


import styles from './MenuStyle'

import { Ionicons } from '@expo/vector-icons';
import Modal from 'react-native-modal';
import ModalContent from './Components/ModalContent'

const products = [
    {
        name: 'Espetinho',
        product_categ: 'portion',
        image_id: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/old_logo.png',
        description: 'AAAAAAAAAAAAAAAAAAA',
        price: 14.5
    },
    {
        name: 'Heineken',
        product_categ: 'drink',
        image_id: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/old_logo.png',
        description: 'AAAAAAAAAAAAAAAAAAA',
        price: 14.5
    },
    {
        name: 'bud',
        product_categ: 'drink',
        image_id: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/old_logo.png',
        description: 'AAAAAAAAAAAAAAAAAAA',
        price: 14.5
    },
    {
        name: 'Petit gateau',
        product_categ: 'desert',
        image_id: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/old_logo.png',
        description: 'AAAAAAAAAAAAAAAAAAA',
        price: 14.5
    },
    {
        name: 'Batata Frita',
        product_categ: 'portion',
        image_id: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/old_logo.png',
        description: 'AAAAAAAAAAAAAAAAAAA',
        price: 14.5
    },
    {
        name: 'Mandioquinha',
        product_categ: 'portion',
        image_id: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/old_logo.png',
        description: 'AAAAAAAAAAAAAAAAAAA',
        price: 14.5
    },
    {
        name: 'Sorvete',
        product_categ: 'desert',
        image_id: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/old_logo.png',
        description: 'AAAAAAAAAAAAAAAAAAA',
        price: 14.5
    },
    {
        name: 'Skol Beats',
        product_categ: 'drink',
        image_id: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/old_logo.png',
        description: 'AAAAAAAAAAAAAAAAAAA',
        price: 14.5
    },
    {
        name: 'Gim Tônica',
        product_categ: 'drink',
        image_id: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/old_logo.png',
        description: 'AAAAAAAAAAAAAAAAAAA',
        price: 14.5
    },
    {
        name: 'Corotinho',
        product_categ: 'drink',
        image_id: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/old_logo.png',
        description: 'AAAAAAAAAAAAAAAAAAA',
        price: 14.5
    },
    {
        name: 'Kibe Vegano',
        product_categ: 'portion',
        image_id: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/old_logo.png',
        description: 'AAAAAAAAAAAAAAAAAAA',
        price: 14.5
    },
    {
        name: 'Torta de limão',
        product_categ: 'desert',
        image_id: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/old_logo.png',
        description: 'AAAAAAAAAAAAAAAAAAA',
        price: 14.5
    },
    {
        name: 'Hamburguer',
        product_categ: 'portions',
        image_id: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/old_logo.png',
        description: 'AAAAAAAAAAAAAAAAAAA',
        price: 14.5
    },
    {
        name: 'Vodka + Energético',
        product_categ: 'drink',
        image_id: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/old_logo.png',
        description: 'AAAAAAAAAAAAAAAAAAA',
        price: 14.5
    },
    {
        name: 'Tequila Shot',
        product_categ: 'drink',
        image_id: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/old_logo.png',
        description: 'AAAAAAAAAAAAAAAAAAA',
        price: 14.5
    },
    {
        name: 'Bolo Chocolate',
        product_categ: 'desert',
        image_id: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/old_logo.png',
        description: 'AAAAAAAAAAAAAAAAAAA',
        price: 14.5
    },
]


export default function Menu({navigation}){
    const [modalFlag, setModalFlag] = useState(false)
    const [selectedProduct, setSelectedProduct] = useState()
    const [portions, setPortions] = useState(firstArray('portion', products))
    const [drinks, setDrinks] = useState(firstArray('drink', products))
    const [deserts, setDeserts] = useState(firstArray('desert', products))
    const [currentMenu, setCurrentMenu] = useState({
        tab: 'portions',
        menu: portions
    })

    function getTotalPrice(totalSum) {
        return Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(totalSum);
    }

    function firstArray(categ, searchProducts){
        const array = []
        searchProducts.map((product)=>{
            if(product.product_categ===categ){
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
                    <TouchableHighlight onPress={()=>{selectTab('portions')}}>
                        {
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
                    <TouchableHighlight onPress={()=>{selectTab('drinks')}}>
                        {
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
                    <TouchableHighlight onPress={()=>{selectTab('deserts')}}>
                        {
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
                </View>
                <ScrollView style={styles.menuContainer}>
                    {
                        currentMenu &&
                        currentMenu.menu.map(product=>{
                            return (
                                <View>
                                    <TouchableHighlight onPress={()=>{selectProduct(product)}}>
                                    <View style={styles.productContainer}>
                                        <Image source={{ uri: product.image_id}} style={{width: 100, height: 100, borderRadius: 15}} />
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
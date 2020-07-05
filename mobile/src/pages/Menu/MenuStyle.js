import { StyleSheet } from "react-native";


export default StyleSheet.create({
    background: {
        backgroundColor: '#000',
        padding: 20,
    },
    tabsContainer:{
        flexDirection: 'row',
        justifyContent: "space-evenly"
    },
    tabText:{
        color: '#ffffff',
        fontWeight: '600',
        fontSize: 15
    },
    menuContainer:{
        backgroundColor: '#2A2A2A',
        borderRadius: 20,
        height: 450
    },
    productContainer: {
        padding: 10,
        flexDirection: 'row',
    },
    infoContainer:{
        margin: 10,
        justifyContent: 'space-around'
    },
    productName: {
        textTransform: 'uppercase',
        color: '#ffffff'
    },
    productDescription: {
        color: '#ffffff',
        fontSize: 10
    },
    productPrice: {
        color: '#ffffff'
    },
    menuDivider: {
        borderColor: '#ffffff',
        borderWidth: 0.1,
    },
    tabHighlight: {
        padding: 10,
        backgroundColor: '#2A2A2A',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
    },
    tabNormal: {
        padding: 10,
    },
    header: {
        backgroundColor: '#2A2A2A',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        height: 100,
        paddingHorizontal: 10
    },
    barName: {
        color: '#F4AA1D',
        fontWeight: '600',
        fontSize: 40,
    },
    goBackText:{
        color: '#ffffff',
        fontSize: 20,
        marginLeft: 8
    },
    goBackConatainer: {
        flexDirection: 'row',
        alignItems: 'center'
    }
});
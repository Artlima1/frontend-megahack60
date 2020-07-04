import { StyleSheet } from 'react-native'


export default StyleSheet.create({
    container: {
        flex: 1,
    },
    header:{
        flexDirection: 'row',
        justifyContent: "space-between",
        height: 98,
        backgroundColor: '#455056',
        alignItems: 'center'
    },
    backAndName:{
        marginLeft: 15, 
        flexDirection: 'row',
        alignItems: 'center'
    },
    barName:{
        marginLeft: 15,
        fontSize: 40,
        fontWeight: '600',
        color: '#F4AA1D',
    }
});

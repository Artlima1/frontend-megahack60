import { StyleSheet } from 'react-native'


export default StyleSheet.create({
    container: {
        flex: 1,
    },
    header:{
        flexDirection: 'row',
        justifyContent: "space-between",
        height: 80,
        backgroundColor: '#212121',
        alignItems: 'flex-end'
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
    },
    clientsContainer: {
        alignItems: 'center',
    },
    clientsString:{
        flexDirection: 'row',
        alignItems: 'baseline'
    },
    clientsNumber: {
        fontSize: 20,
        color: '#ffffff'
    },
    clients: {
        fontSize: 15,
        color: '#ffffff'
    },
    barImg:{
        height: 200
    },
    stars:{
        backgroundColor: '#2A2A2A',
        padding: 10
    },
    tabBar:{
        flexDirection: 'row',
        backgroundColor: '#2A2A2A',
        justifyContent: 'space-around'
    },
    tabText: {
        color: '#FFFFFF',
        fontSize: 12.4
    },
    divider:{
        borderColor: '#ffffff',
        borderWidth: 0.5,
        height: 45,
        alignSelf: 'flex-end'
    },
    tabHighlight:{
        paddingVertical: 20,
        backgroundColor: '#000',
        padding: 10
    },
    tabNormal: {
        paddingVertical: 20,

    }
});

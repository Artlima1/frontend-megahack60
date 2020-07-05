import { StyleSheet } from 'react-native'


export default StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#000000',
    },
    paymentMethodsHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',

        padding: 20,
        backgroundColor: '#455056',
        height: 160,
    },
    seusPedidosContainer: {
        flexDirection: 'column',
    },
    seusPedidosText: {
        color: '#FFFFFF',
        fontSize: 11,
        fontWeight: 'bold',
        marginLeft: 10,
    },
    seusPedidosIcon: {
        marginLeft: 20
    },
    paymentMethodsTitle: {
        fontSize: 40,
        marginLeft: 15,
        color: '#F4AA1D',
    },
    grayContainer: {
        borderRadius: 12,
        alignSelf: 'center',
        justifyContent: 'space-around',
        marginTop: 40,
        width: 370,
        height: 480,
    },
    grayColor: {
        backgroundColor: '#FFFFFF',
        borderRadius: 12,
        alignSelf: 'center',
        width: 370,
        height: 480,
        opacity: 0.3,
        position: 'absolute',
    },
});
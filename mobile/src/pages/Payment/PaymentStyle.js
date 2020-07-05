import { StyleSheet } from 'react-native'


export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000',
    },
    paymentHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',

        padding: 20,
        backgroundColor: '#1d1d1d',
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
    paymentTitle: {
        fontSize: 40,
        marginLeft: 15,
        color: '#F4AA1D',
    },
    finalizarPagamentoContainer: {
        backgroundColor: '#FB0C06',
        height: 50,
        width: 250,
        borderRadius: 10,
        alignSelf: 'center',
        marginTop: 140
    },
    finalizarPagamentoText: {
        color: '#FFFFFF',
        fontSize: 25,
        fontWeight: 'bold',
        alignSelf: 'center',
        marginTop: 5
    },
    grayContainer: {
        borderRadius: 12,
        alignSelf: 'center',
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
    totalText: {
        color: '#FFFFFF',
        fontSize: 25,
        fontWeight: 'bold',
        marginLeft: 30,
        marginTop: 10,
        top: 23
    },
    totalNumber: {
        alignSelf: 'center',
        color: '#FFFFFF',
        fontSize: 60,
        fontWeight: 'bold',
        top: 15
    },
    tipText: {
        alignSelf: 'center',
        color: '#FFFFFF',
        fontSize: 17,
        bottom: 25
    },
    tipContainer: {
        width: 150,
        height: 60,
        alignItems: 'center',
        alignSelf: 'center',
    },
    coloredTipContainer: {
        opacity: 0.5,
        borderRadius: 8,
        width: 150,
        height: 60,
        backgroundColor: '#FFFFFF',
        bottom: 20
    },
    tip: {
        alignSelf: 'center',
        color: '#FFFFFF',
        fontSize: 30,
        fontWeight: 'bold',
        position: 'absolute',
        bottom: 30
    },
    cardLine: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        top: 200,
        right: 10 
    },
    cardLineContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: '#FFFFFF',
        color: '#FFFFFF',
        height: 25,
        width: 150,
        alignItems: 'center',
        borderRadius: 4,
        opacity: 0.5,
        marginLeft: 10
    },
    cardNumber: {
        color: '#000',
        fontSize: 15,
        alignSelf: 'center'
    },
    changeMethod: {
        alignSelf: 'center',
        fontSize: 10,
        fontWeight: 'bold',
        top: 200,
        color: '#FFFFFF',
        textDecorationLine: 'underline',
        left: 10
    },
});
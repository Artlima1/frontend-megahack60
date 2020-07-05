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
    totalText: {
        color: '#FFFFFF',
        fontSize: 25,
        fontWeight: 'bold',
        marginLeft: 50,
        marginTop: 10
    },
    totalNumber: {
        alignSelf: 'center',
        color: '#FFFFFF',
        fontSize: 50,
        fontWeight: 'bold',
    },
    cardLine: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
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
        fontSize: 10
,        fontWeight: 'bold',
        color: '#FFFFFF',
        textDecorationLine: 'underline',
    },
    tip: {
        alignSelf: 'center',
        color: '#FFFFFF',
        fontSize: 10,
    },
    tipContainer: {
        width: 150,
        height: 60,
        alignItems: 'center',
        alignSelf: 'center',
    },
    coloredTipContainer: {
        opacity: 0.5,
        borderRadius: 4,
        width: 150,
        height: 60,
        backgroundColor: '#FFFFFF',
    },
    tipText: {
        alignSelf: 'center',
        color: '#FFFFFF',
        fontSize: 30,
        fontWeight: 'bold',
        position: 'absolute',
    }
});
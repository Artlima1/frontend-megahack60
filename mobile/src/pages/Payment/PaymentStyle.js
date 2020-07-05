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
        marginLeft: 10,
    },
    totalText: {
        alignSelf: 'center',
        color: '#FFFFFF',
        fontSize: 25,
        fontWeight: 'bold',
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
        backgroundColor: '#FFFFFF',
        color: '#FFFFFF',
        width: 150,
        alignItems: 'center',
        borderRadius: 4,
        opacity: 0.5,
        marginLeft: 10
    },
    changeMethod: {
        alignSelf: 'center',
        fontWeight: 'bold',
        color: '#FFFFFF',
        textDecorationLine: 'underline',
    },
    cardNumber: {
        color: '#FFFFFF',
        fontSize: 10,
    },
    tip: {
        alignSelf: 'center',
        color: '#FFFFFF',
        fontSize: 10,
    },
    tipContainer: {
        backgroundColor: '#FFFFFF',
        width: 150,
        height: 60,
        alignItems: 'center',
        borderRadius: 4,
        opacity: 0.5,
        alignSelf: 'center',
    },
    tipText: {
        alignSelf: 'center',
        color: '#FFFFFF',
        fontSize: 30,
        fontWeight: 'bold',
    }
});
import { StyleSheet } from 'react-native'


export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000',
    },
    paymentHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 20,
        backgroundColor: '#455056',
        height: 160,
    },
    seusPedidosText1: {
        color: '#FFFFFF',
        fontSize: 15,
        fontWeight: 'bold',
        marginTop: 7,
        marginLeft: 10,
    },
    seusPedidosText2: {
        color: '#FFFFFF',
        fontSize: 15,
        fontWeight: 'bold',
        marginLeft: 10,
    },
    seusPedidosContainer: {
        flexDirection: 'row',
        marginTop: 10
    },
    paymentTitle: {
        fontSize: 40,
        color: '#F4AA1D',
    },
    finalizarPagamentoContainer: {
        marginTop: 500,
        backgroundColor: '#FB0C06',
        height: 50,
        width: 250,
        borderRadius: 10,
        alignSelf: 'center',
    },
    finalizarPagamentoText: {
        color: '#FFFFFF',
        fontSize: 15,
        fontWeight: 'bold',
        alignSelf: 'center',
    },
});
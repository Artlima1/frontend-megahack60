import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flex: 5,
        backgroundColor: '#1d1d1d',
    },
    headerTop: {
        flex: 3,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    topGroup: {
        flexDirection: 'row',
        margin: 5,
        marginLeft: 10,
        alignItems: 'center',
    },
    whiteLink: {
        color: '#ffff',
        textDecorationLine: 'underline',
        margin: 10,
    },
    qr: {
        margin: 10,
        zIndex: 100,
    },
    headerBottom:{
        zIndex: 5,
        flex: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        color: '#F4AA1D',
        fontSize: 30,
    },
    content: {
        flex: 15,
        backgroundColor: '#000000',
        padding: 20,
        paddingVertical: 35,
    },
    filters: {
        padding: 5,
        flex: 1,
        flexWrap: 'wrap',
        flexDirection: 'row',
        backgroundColor: '#999999',
        borderRadius: 10,
        alignContent: 'center',
        justifyContent: 'center',
    },
    innerCircle: {
        width: 100,
        height: 100,
        margin: 10,
        borderRadius: 100,
        backgroundColor: '#ffff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    innerDCircle: {
        width: 100,
        height: 100,
        margin: 10,
        borderRadius: 100,
        opacity: 0.3,
        backgroundColor: '#ffff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    categText: {
        fontSize: 12,
        alignSelf: "center",
        color: "#ffff"
    }
})
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    button: {
        flexDirection: 'row',
    },
    header: {
        width: '100%',
        padding: 20,
        backgroundColor: '#1D1D1D',

    },
    contento: {
        flex: 1,
        resizeMode: 'stretch',
        width: null,
        height: null,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000',
    },
    content: {
        flex: 1,
        maxHeight: 300,
        marginTop: 30,
    },
    legendCard:{
        flexDirection: 'row',
        maxHeight: 35,
        
    },
    stars:{
        borderTopWidth: 15,
        borderTopColor: '#fff'
    },
    iconButton: {
        position: "absolute",
        left: 280,
    },
    peopleIcon: {
        flexDirection: 'column',
        paddingLeft: 50,
    },
    container: {
        flex: 1,
        backgroundColor: '#000',

        // alignItems: 'center',
        // justifyContent: 'center',
    },
});
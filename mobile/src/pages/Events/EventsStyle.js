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
    content: {
        flex: 1,
        resizeMode: 'stretch',
        width: null,
        height: null,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000',
    },
    legendCard:{
        flexDirection: 'row',
        
    },
    stars:{
        borderTopWidth: 15,
        borderTopColor: '#fff'
    },
    iconButton: {
        position: "absolute",
        zIndex: 100,
        top: 5,
        left: 300,
    },
    peopleIcon: {
        flexDirection: 'column',
        paddingLeft: 50,
    },
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
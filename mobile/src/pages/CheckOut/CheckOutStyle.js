import { StyleSheet } from 'react-native'


export default StyleSheet.create({
    container: {
        flex: 1,
        resizeMode: 'stretch',
        width: null,
        height: null,
        alignItems: 'center',
        justifyContent: 'center',
    },
    background: {
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        padding: 20,
        opacity: 0.8,

    },
    evaluation: {
        marginBottom: 10,
        marginTop: 10,
    },
    stars: { 
        alignItems:'flex-end',
    }
});

import { StyleSheet } from 'react-native'


export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000',
    },
    profileTitle: {
        fontSize: 45,
        color: '#F4AA1D',
        elevation: 8,
    },
    profileHeader: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#455056',
        height: 160,
    },
    optionsButtonText: {
        color: '#FFFFFF',
        fontSize: 20,
        marginTop: 30,
    },
    userStyle: {
        flexDirection: 'row-reverse',
        backgroundColor: '#FB0C06',
        height: 33,
        alignItems: 'center',
        justifyContent: 'center',
    },
    userText: {
        color: '#FFFFFF',
        fontSize: 25,
        fontWeight: 'bold'
    },
    logoImage: {
        flex: 1,
        width: 50,
        height: 50,
        resizeMode: 'contain' 
    }
});
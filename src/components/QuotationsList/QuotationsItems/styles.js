import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    mainContent: {
        width: '95%',
        height: 'auto',
        backgroundColor: '#000',
        maginleft: '3%',
        maginBottom:15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10
        
    },
    contextLeft: {
        width: '36%',
        height: '100%',
        alignItems: 'flex-start',
    },
    boxLogo: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    logoBitcoin: {
        width: 50,
        height: 50,
        marginLeft: 2,
        
    },
    dayCotation: {
        fontSize: 16,
        color: '#fff',
        paddingLeft: 5,
        fontWeight: 'bold',
    },
    contextRigth: {
        width: '60%',
        alignItems: 'flex-end',
    },
    price: {
        fontSize: 20,
        color: '#fff',
        fontWeight: 'bold',
    }
})

export default styles;
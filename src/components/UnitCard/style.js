import {StyleSheet} from 'react-native'
import colors from '../../../contains/colors'

const styles = StyleSheet.create({
    wrapUnitCard: {
        width: '50%',
    },
    unitCard: {
        borderRadius: 5,
        padding: 16,
        backgroundColor: colors.white,
        shadowColor: colors.black,
        shadowOpacity: '25%',
        shadowOffset: {
            width: 0,
            height: 1
        },
        elevation: 2,
        height: 112,
        marginHorizontal: 8,
        marginBottom: 6,
        justifyContent: 'space-evenly',
    },
    unitName:{
        fontSize: 14,
        fontWeight: 'bold',
        color: colors.text,
        lineHeight: 17
    },
    numberOfCards: {
        fontSize: 10,
        color: colors.darkGray,
        lineHeight: 12

    }, 
    wrapUser: {
        flexDirection: 'row',
        height: 16,
        alignItems: 'center',
    },
    avatar: {
        width: 16,
        height: 16,
        borderRadius: 100,
        marginRight: 4
    },
    username: {
        color: colors.violet,
    }
})

export default styles

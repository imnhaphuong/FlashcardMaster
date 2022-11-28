import { StyleSheet, StatusBar } from 'react-native'
import colors from '../../../contains/colors';

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        backgroundColor: colors.white,
        shadowColor: colors.text,
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 1 },
        elevation: 2,
    },
    title: {
        fontSize: 30,
        justifyContent: 'center',
        marginLeft: "25%",
        borderRadius: 10
    },
    input: {
        height: 30,
        margin: 12,
        borderWidth: 0.25,
        padding: 10,
        backgroundColor: colors.white,
    },
    input_title: {
        fontSize: 15,
        color: colors.darkGray,
        marginLeft: 10
    }
});

export default styles
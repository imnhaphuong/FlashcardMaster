import { StyleSheet, StatusBar } from 'react-native'
import colors from '../../../contains/colors';
import fonts from '../../../contains/fonts';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.pastelPurple,
        flexDirection: "column",
    },
    header: {
        flexDirection: "row",
        height: 64,
        backgroundColor: colors.white,
        shadowColor: colors.text,
        paddingHorizontal: 20,
        alignItems: "center",
        justifyContent: "space-between",
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 1 },
        elevation: 2,
        zIndex: 10,
        borderColor: "green"
    },
    textHeader: {
        alignItems: "center",
        fontSize: 20,
        color: colors.text,
        fontFamily: 'WorkSans-SemiBold',
    },
    userinfor: {
        flexDirection: 'row',
        alignItems: "center",
    },
    avatar: {
        width: 70,
        height: 70,
        borderRadius: 100,
        justifyContent:"flex-end",
    },
    counts: {
        backgroundColor: 'red'
    },
    statics: {
        flexDirection: 'row',
        //height: '20%',
    },
    count: {
        backgroundColor: colors.violet,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center",
    },

});

export default styles
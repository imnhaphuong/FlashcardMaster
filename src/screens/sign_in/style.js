import { StyleSheet } from "react-native";
import colors from "../../../contains/colors";

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        color: colors.text,
        fontSize: 28,
        textTransform: 'uppercase',
        lineHeight: 35.84,
        fontFamily: 'WorkSans-Bold',

    },
    subTitle: {
        color: colors.darkGray,
        fontSize: 14,
        height:'100%',
        lineHeight: 16.42,
        marginTop:10,
        fontFamily: 'WorkSans',

    },
    textSignIn: {
        // fontWeight: '700',
        fontSize: 16,
        lineHeight: 24,
        letterSpacing: 0.2,
        color: colors.violet,
        marginLeft: 5,
        textDecorationLine: "underline",
        textDecorationStyle: "solid",
        fontFamily: 'WorkSans-SemiBold',

    },
    btnText: {
        // fontWeight: '500',
        fontSize: 16,
        letterSpacing: 0.2,
        color: colors.text,
        fontFamily: 'WorkSans-SemiBold',

    },



})
export default styles;
import { StyleSheet } from "react-native";
import colors from "../../../contains/colors";

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    vectorTop: {
        flex: 1,
        left: 220,
    },
    title: {
        color: colors.text,
        fontSize: 28,
        fontWeight: '700',
        textTransform: 'uppercase',
        lineHeight: 35.84,
    },
    subTitle: {

        color: colors.darkGray,
        fontSize: 14,
        fontWeight: '400',
        lineHeight: 16.42,
    },
    formInput: {
        flexDirection: 'row', alignItems: 'center', height: 50,
        borderColor: colors.text,
        borderWidth: 2,
        padding: 12,
        color: colors.text,
        borderRadius: 10,
        marginVertical: 10,
    }


})
export default styles;
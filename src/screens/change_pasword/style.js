import { StyleSheet, StatusBar } from 'react-native'
import colors from '../../../contains/colors';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
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
        flex: 1,
        textAlign: "center",
        fontSize: 20,
        color: colors.text,
        fontFamily: 'WorkSans-SemiBold',
    },
    content: {
        paddingHorizontal: 20,
        paddingVertical: 10
    },
    user_info:{
        height: 300,
        justifyContent: "space-around",
    },
    input: {
        height: 50,
        borderWidth: 0.5,
        borderColor: colors.darkGray,
        borderRadius: 5,
    },
    input_title: {
        fontSize: 16,
        color: colors.darkGray,
    },
    btn: {
        borderRadius: 10,
        width: "100%",
        height: 50,
        backgroundColor: "#006965",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20,
    },
    btn_text: {
        fontSize: 18,
        color: colors.white
    }
});

export default styles
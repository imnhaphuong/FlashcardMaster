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
    title: {
        textDecorationLine: "underline",
        fontWeight: "bold",
        fontSize: 18,
    },
    avatar:{
        alignItems: "center"
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 100,
        borderBottomWidth: 1
    },
    user_info: {
        justifyContent: "space-around",
        height: 190
    },
    item: {
        fontSize: 16,
        color: colors.darkGray
    },
    input: {
        height: 45,
        borderWidth: 0.5,
        borderColor: colors.darkGray,
        borderRadius: 5,
        paddingLeft: 10
    },
    notify: {
        flexDirection: "row",
        height: 50,
        alignItems: "center",
        justifyContent: "space-between"
    },
    version: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    version_text: {
        fontSize: 18,
        fontStyle: "italic",
    },
    btn_gr: {
        height: 120,
        justifyContent: "space-around",
        marginVertical: 20
    },
    btn: {
        borderRadius: 10,
        width: "100%",
        height: 45,
        backgroundColor: "#006965",
        justifyContent: "center",
        alignItems: "center"
    },
    btn_text: {
        fontSize: 18,
        color: colors.white
    }
});

export default styles
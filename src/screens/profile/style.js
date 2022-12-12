import { StyleSheet } from 'react-native'
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
    userinfor: {
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 20,
        borderBottomWidth: 0.2,
        paddingVertical: 5
    },
    counts: {
        paddingHorizontal: 20,
        paddingVertical: 10
    },
    avatar: {
        width: 70,
        height: 70,
        borderRadius: 100,
        justifyContent: "flex-end",
    },
    statics: {
        flexDirection: 'row',
        justifyContent: "space-around",
        paddingVertical: 5,
    },
    count: {
        backgroundColor: colors.pastelPurple,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 20,
        paddingVertical: 18,
    },
    fullname: {
        fontSize: 20,
        fontWeight: "500",
    },
    wrapUnits: {
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "flex-start",
        paddingHorizontal: 12,
        paddingTop: 20,
    },
    wrapClasses: {
        flex: 1,
        justifyContent: "center",
        paddingHorizontal: 12,
        paddingTop: 20,
    },
    wrapInsignia: {
        flex: 1,
        justifyContent: "center",
        paddingHorizontal: 12,
        paddingTop: 20,
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
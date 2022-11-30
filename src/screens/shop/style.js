import { StyleSheet } from 'react-native'
import colors from '../../../contains/colors';

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
        flex: 1,
        textAlign: "center",
        fontSize: 20,
        color: colors.text,
        fontFamily: 'WorkSans-SemiBold',
    },
    wrapInsigniases:{
       
    }
});
export default styles
import { StyleSheet, StatusBar } from 'react-native'
import colors from '../../../contains/colors';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        flexDirection: "column",
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingVertical: 10,
        //paddingTop: 30
    },
    input: {
        height: 45,
        width: '80%',
        borderWidth: 1,
        borderColor: '#405655',
        paddingHorizontal: 30,
        borderRadius: 5,
    },
    icon: {
        position: 'absolute',
        marginLeft: 60,
    },
    content: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 20,
        paddingRight: 5,
        borderBottomWidth: 2,
        borderColor: colors.darkGray,
        paddingVertical: 10
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
        //fontStyle:"italic"
    }

})
export default styles
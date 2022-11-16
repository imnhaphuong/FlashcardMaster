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
        paddingTop: "10%"
    },
    title: {
        fontSize: 30,
        justifyContent: 'center',
        marginLeft: "27%"
    },
    tick :{
        marginLeft: "30%"
    }
});

export default styles
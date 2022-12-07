import { StyleSheet, StatusBar } from 'react-native'
import colors from '../../../contains/colors';

const styles = StyleSheet.create({
    card: {
        borderWidth: 1,
        borderRadius: 5,
        alignItems: "center",
        marginTop: 10,
        marginHorizontal: 10,
        flexDirection: "row",
        paddingHorizontal: 5
    },
    container: {
        padding: 10
    },
    image: {
        width: 55,
        height: 55,
        borderWidth: 1
    },
    name: {
        fontSize: 20,
    },
    price: {
        flexDirection: "row",
        paddingTop: 5,
        alignItems: "center"
    },
    price_text: {
        marginLeft: 8,
        fontSize: 15
    }

})
export default styles
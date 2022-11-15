import { StyleSheet } from "react-native";
import colors from "../../../contains/colors";

const styles = StyleSheet.create({
    title: {
        flexDirection: 'row',
        alignItems: "center",
        height: "20%",
        backgroundColor: colors.white,
        shadowColor: colors.yellow,
        shadowOpacity: "25%",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        elevation: 1,
    },
    name: {
       justifyContent:"center",
       marginLeft: "35%",
       flex: 1,
       fontSize: 20
    },
});
export default styles;
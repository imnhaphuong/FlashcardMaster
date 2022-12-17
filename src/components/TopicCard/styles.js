import { StyleSheet } from "react-native";
import colors from "../../../contains/colors";
import fonts from "../../../contains/fonts";

const Styles = StyleSheet.create({
    topic: {
      marginVertical: 15,
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginHorizontal: 20
    },
    titletopic: {
      fontFamily:fonts.semibold,
      color: colors.text,
      fontSize: 16
    },
    readmore: {
      fontFamily:fonts.semibold,
      color: colors.violet,
      fontSize: 14,
    },
    wrapUnits: {
      paddingHorizontal: 12,
    }
});
export default Styles;
import { StyleSheet } from "react-native";
import colors from "../../../contains/colors";

const Styles = StyleSheet.create({
    topic: {
      marginVertical: 15,
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginHorizontal: 20
    },
    titletopic: {
      color: '#2D005B',
      fontSize: 16
    },
    readmore: {
      color: colors.violet,
      fontSize: 14,
    },
    wrapUnits: {
      flex: 1,
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "flex-start",
      paddingHorizontal: 12,
    }
});
export default Styles;
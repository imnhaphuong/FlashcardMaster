import { StyleSheet, StatusBar } from "react-native";
import colors from "../../../contains/colors";

const styles = StyleSheet.create({
    input: {      
        marginBottom: 10,
        
    },
    textInput: {
        height:50,
        backgroundColor: colors.white,
        fontSize: 16,
        fontWeight:'500',
        color: colors.darkGray,        
    },
    textErr: {
        fontSize: 13,
        color: 'red',
        fontWeight: '500',
        marginLeft: 10
      }

});
export default styles;
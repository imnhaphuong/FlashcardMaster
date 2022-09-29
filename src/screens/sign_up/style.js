import { StyleSheet } from "react-native";
import colors from "../../../contains/colors";

const styles = StyleSheet.create({
    container: {
        flex:1,         
    },
    vectorTop: {
        flex:1,
        left: 220,
    },
    title:{
        color:colors.text,
        fontSize:28,
        fontWeight:'700',
        textTransform: 'uppercase',
        lineHeight:35.84,
    },
    subTitle:{
        
        color:colors.dark_gray,
        fontSize:14,
        fontWeight:'400',
        lineHeight:16.42,
    },
    textInput:{
        height:50,
        borderColor:colors.text,
        borderWidth:2,
        alignItems: 'center',
        padding:12 ,
        color:colors.text,
        borderRadius:10,
        fontSize:16,
        fontWeight:'500',
        letterSpacing:0.2,
        marginVertical:10,
    },
    btnDangKy:{
        backgroundColor:colors.violet,
        borderRadius:10,
    
    },
    vectorBot:{

    },
    btnText:{
        fontWeight:'500',
        fontSize:16,
        letterSpacing:0.2,
        color:colors.pastel_purple,
    }


})
export default styles;
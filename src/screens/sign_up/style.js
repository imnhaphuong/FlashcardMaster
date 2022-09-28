import { StyleSheet } from "react-native";
import colors from "../../../contains/colors";
import { SafeAreaView, StatusBar, Platform } from 'react-native';
const styles = StyleSheet.create({
    container: {
        flex:1,  
    },
    vectorTop: {
        width: 236,
        height: 190,
        left: 172,
    },
    title:{
        // fontFamily:'Work Sans',
        color:colors.headline,
        fontSize:28,
        fontWeight:'700',
        textTransform: 'uppercase',
        lineHeight:32.84,
    },
    subTitle:{
        color:colors.subHeadline,
        fontSize:14,
        fontWeight:'400',
        lineHeight:16.42,
        marginRight:3,
    },
    subTitleColor:{
        color:colors.secondary,
    },
    textInput:{
        width:335,
        height:50,
        borderColor:colors.stroke_1,
        borderWidth:2,
        alignItems: 'center',
        padding:12 ,
        color:colors.primary,
        borderRadius:10,
        fontSize:16,
        fontWeight:'500',
        letterSpacing:0.2,
        marginVertical:5,
    },
    label:{
        marginVertical:5,
        fontSize:16,
    },
    btnDangKy:{
        flex:1,
        backgroundColor:colors.button,
        width:335,
        height:48,
        alignItems: "center",
        justifyContent: "center",
        borderWidth:2,
        borderColor:colors.primary,
        borderRadius:10,
    
    },
    vectorBot:{

    },
    btnText:{
        fontWeight:'500',
        fontSize:16,
        lineHeight:24,
        letterSpacing:0.2,
        color:colors.primary,
    }


})
export default styles;
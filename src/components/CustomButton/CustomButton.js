import { View, Text, StyleSheet, TextInput, TouchableOpacity, Pressable } from 'react-native'
import React, { useState } from 'react'
import colors from '../../../contains/colors'
import GoogleLogo from '../../../assets/images/sign_up/_Google.svg'

const CustomButton = ({ name,onPress, text, type = 'SIGNIN', hide }) => {


    return (
        <TouchableOpacity name={name} onPress={onPress}  >
            <View style={[styles.btnDangKy, styles[`btnDangKy_${type}`]]}>
                <View style={styles[`${hide}`]} >
                    <GoogleLogo />
                </View>
               <Text style={[styles.btnText, styles[`btnText_${type}`]]}>{text}</Text>
            </View>
        </TouchableOpacity >
    )
}

const styles = StyleSheet.create({
    btnDangKy: {
        flexDirection: 'row',
        borderRadius: 10,
        height: 55,
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 10,
    },
    btnDangKy_SIGNIN: {
        backgroundColor: colors.violet,

    },
    btnDangKy_GG: {
        backgroundColor: colors.pink,
        zIndex:1000,
        marginVertical: 20,
    },
    btnDangKy_ADD:{
        marginTop:5,
        backgroundColor: colors.pink,
    },
    btnDangKy_CHANGE_IMAGE:{
        height: 40,
        backgroundColor: colors.pink,
        width:"100%"
    },
    btnDangKy_DE_IMAGE:{
        height: 40,
        borderRadius: 10,
        backgroundColor: colors.violet,
        width:"100%"
    },
    btnDangKy_CHANGE_TRUE:{
        borderRadius: 10,
        backgroundColor: colors.violet,
        width:"100%"
    },
    btnDangKy_CHANGE_FALSE:{
        borderRadius: 10,
        backgroundColor: colors.pink,
        width:"100%"
    },
    btnText: {
        fontSize: 16,
        letterSpacing: 0.2,
        fontFamily: 'WorkSans-SemiBold',
    },
    btnText_SIGNIN: {
        color: colors.pastelPurple,
    },
    btnText_GG: {
        color: colors.text,
        marginLeft: 5
    },
    btnText_ADD:{
        color: colors.text,       
    },
    btnText_CHANGE_IMAGE:{
        color: colors.text,  
        fontSize: 14,
    },
    btnText_DE_IMAGE:{
        fontSize: 14,
        color: colors.white,  
    },
    btnText_CHANGE_TRUE:{
        fontSize: 18,
        color: colors.white,  
    },
    btnText_CHANGE_FALSE:{
        fontSize: 18,
        color: colors.white,  
    },
    hide:{
        display:'none',
    }
})
export default CustomButton
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Pressable } from 'react-native'
import React, { useState } from 'react'
import colors from '../../../contains/colors'
import Icon from 'react-native-vector-icons/FontAwesome'
import GoogleLogo from '../../../assets/images/_Google.svg'

const CustomButton = ({ onPress, text, type = 'SIGNIN', hide }) => {


    return (
        <TouchableOpacity onPress={onPress}  >
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
        height: 60,
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 10,
    },
    btnDangKy_SIGNIN: {
        backgroundColor: colors.violet,

    },
    btnDangKy_GG: {
        backgroundColor: colors.pink,
    },
    btnText: {
        fontWeight: '500',
        fontSize: 16,
        letterSpacing: 0.2,

    },
    btnText_SIGNIN: {
        color: colors.pastel_purple,
    },
    btnText_GG: {
        color: colors.text,
        marginLeft: 5
    },
    hide:{
        display:'none',
    }
})
export default CustomButton

import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import colors from "../../../contains/colors";
import fonts from "../../../contains/fonts";

const InputChangePassword = ({
    label,
    error,
    oldPassword,
    newPassword,
    repeatNewPassword,
    onFocus = () => { },
    ...props
}) => {
    const [isFocused, setIsFocused] = useState(false);
    const [hidePassword, setHidePassword] = useState(true)
    return (
        <View style={{ marginBottom: 5 }}>
            <Text style={style.label}>{label}</Text>
            <View style={[style.inputContainer, { borderColor: error ? colors.red : isFocused ? colors.success : colors.text }]}>
                <TextInput
                    secureTextEntry={hidePassword}
                    autoCorrect={false}
                    onFocus={() => {
                        onFocus();
                        setIsFocused(true);
                    }}
                    onBlur={() => {
                        setIsFocused(false)
                    }}
                    style={{ color: colors.text, flex: 1, fontSize:16,fontFamily:fonts.regular }}
                    {...props} />
                <Icon
                    onPress={() => setHidePassword(!hidePassword)}
                    style={{ fontSize: 22, color: colors.graySecondary }}
                    name={hidePassword ? "eye-outline" : "eye-off-outline"} />
            </View>
            {error && <Text style={{ color: colors.red, fontSize: 12, marginTop: 7 }}>{error}</Text>}

        </View>
    );
};
const style = StyleSheet.create({
    label: {
        fontFamily: fonts.semibold,
        marginVertical: 10,
        fontSize: 16,
        color: colors.text,
    },
    inputContainer: {
        height: 55,
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 5,
        borderColor: colors.graySecondary,
        borderWidth: 1,
        backgroundColor: colors.white
    },
})


export default InputChangePassword;
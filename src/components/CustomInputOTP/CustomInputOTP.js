import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import colors from '../../../contains/colors'

const CustomInputOTP = ({ onChangeText, value, keyboardType, autoFocus, returnKeyType, onSubmitEditing, forwardRef }) => {
    return (
        <View>
            <View style={styles.formInput} >
                    <TextInput style={styles.textInput}
                        forwardRef={forwardRef}
                        autoFocus={autoFocus}
                        returnKeyType={returnKeyType}
                        onChangeText={onChangeText}
                        value={value}
                        // onSubmitEditing={onSubmitEditing}
                        keyboardType={keyboardType}
                        maxLength={4}
                    />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    formInput: {
        flexDirection: 'row', alignItems: 'center', height: 66,
        width: '100%',
        borderColor: colors.text,
        borderWidth: 1,
        padding: 10,
        color: colors.text,
        borderRadius: 10,
        backgroundColor: colors.white
    },
    textInput: {
        fontSize: 24,
        left: '26%',
        right: '50%',
        fontWeight: 'bold',
        letterSpacing: 0.2,
        width: '100%',
        color: colors.text,
    },
    textErr: {
        fontSize: 13,
        color: 'red',
        fontWeight: '500',
        marginLeft: 10
    }
})
export default CustomInputOTP
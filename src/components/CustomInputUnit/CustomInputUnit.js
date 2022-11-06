import { View, Text } from 'react-native'
import React from 'react'
import styles from './style'
import { TextInput } from 'react-native-paper'
import colors from '../../../contains/colors'
const CustomInputUnit = ({ label }) => {

    return (
        <View style={styles.input}>
            <TextInput style={styles.textInput} label={label}
                autoCapitalize="none"
                mode="flat"  textColor={colors.text}
                underlineColor={colors.darkGray}
                placeholderTextColor={colors.pink}
                theme={{ colors: { primary: colors.violet, placeholder: colors.pink} }} />
        </View>
    )
}

export default CustomInputUnit
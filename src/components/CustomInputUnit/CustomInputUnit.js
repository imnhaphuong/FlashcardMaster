import { View, Text } from 'react-native'
import React from 'react'
import styles from './style'
import { TextInput } from 'react-native-paper'
import colors from '../../../contains/colors'
const CustomInputUnit = ({label}) => {
    return (
        <View style={styles.input}>
            <TextInput style={styles.textInput} label={label} variant="standard" underlineColor={colors.text} textColor={colors.text} />
        </View>
    )
}

export default CustomInputUnit
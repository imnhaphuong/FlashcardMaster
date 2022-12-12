import { View, Text } from 'react-native'
import React from 'react'
import styles from './style'
import { TextInput } from 'react-native-paper'
import colors from '../../../contains/colors'
const CustomInputUnit = ({ label, touched, errors, onBlur, onChangeText, value, name }) => {

    return (
        <View style={styles.input}>
            <TextInput style={styles.textInput} label={label}
                name={name}
                autoCapitalize="none"
                onBlur={onBlur}
                onChangeText={onChangeText}
                value={value}
                mode="flat" textColor={colors.text}
                underlineColor={colors.darkGray}
                placeholderTextColor={colors.pink}
                theme={{ colors: { primary: colors.violet, placeholder: colors.pink } }} />
            {errors && touched ? <Text style={styles.textErr}>{errors}</Text> : null}


        </View>
    )
}

export default CustomInputUnit
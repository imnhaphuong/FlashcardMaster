import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import colors from '../../../contains/colors'
import Icon from 'react-native-vector-icons/FontAwesome'

const CustomInput = ({ visible, placeholder, icon, keyboardType, secureTextEntry, iconEye }) => {
  return (
    <View style={styles.formInput} >
      <View >
        <Icon name={icon} size={16} color={colors.gray_secondary} />
      </View>
      <View style={{ flex: 1, marginLeft: 5 }} >
        <TextInput style={styles.textInput}
          placeholder={placeholder}
          keyboardType={keyboardType}
          secureTextEntry={secureTextEntry}
          placeholderTextColor={colors.gray_secondary}
        />

      </View>
      <TouchableOpacity>
        <View >
          <Icon name={iconEye} size={16} color={colors.gray_secondary} />
        </View>
      </TouchableOpacity>

    </View>
  )
}
const styles = StyleSheet.create({
  formInput: {
    flexDirection: 'row', alignItems: 'center', height: 60,
    borderColor: colors.text,
    borderWidth: 2,
    padding: 10,
    color: colors.text,
    borderRadius: 10,
    marginVertical: 10,
  },
  textInput: {
    fontSize: 16,
    fontWeight: '500',
    letterSpacing: 0.2,
    width: '100%'
  }
})
export default CustomInput
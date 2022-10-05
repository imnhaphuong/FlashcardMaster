import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import colors from '../../../contains/colors'
import Icon from 'react-native-vector-icons/FontAwesome'

const CustomInput = ({ changeIcon, touched, errors, onBlur, onChangeText, value, placeholder, icon, keyboardType, iconEye, onPress, isEye }) => {
  const hide = hide;
  return (
    <View style={{ marginBottom: 30, }}>

      <View style={styles.formInput} >
        <View >
          <Icon name={icon} size={16} color={colors.graySecondary} />
        </View>
        <View style={{ flex: 1, marginLeft: 5 }} >
          <TextInput style={styles.textInput}
            onBlur={onBlur}
            onChangeText={onChangeText}
            value={value}
            secureTextEntry={changeIcon}
            placeholder={placeholder}
            keyboardType={keyboardType}
            placeholderTextColor={colors.graySecondary}
          />
        </View>
        <TouchableOpacity onPress={onPress}>
          <View>
            {isEye ?
              (changeIcon ? <Icon name={iconEye} size={16} color={colors.graySecondary} /> : <Icon name='eye-slash' size={16} color={colors.graySecondary} />) : null}

          </View>
        </TouchableOpacity>

      </View>
      {errors && touched ? <Text style={styles.textErr}>{errors}</Text> : null}
    </View>


  )
}
const styles = StyleSheet.create({
  formInput: {
    flexDirection: 'row', alignItems: 'center', height: 57,
    borderColor: colors.text,
    borderWidth: 2,
    padding: 10,
    color: colors.text,
    borderRadius: 10,

  },
  textInput: {
    fontSize: 16,
    fontWeight: '500',
    letterSpacing: 0.2,
    width: '100%'
  },
  textErr: {
    fontSize: 14,
    color: 'red',
    fontWeight: 'bold',
    fontStyle: 'italic',
    marginLeft: 10
  }
})
export default CustomInput
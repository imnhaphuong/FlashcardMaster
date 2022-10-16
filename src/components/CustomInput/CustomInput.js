import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import colors from '../../../contains/colors'
import Icon from 'react-native-vector-icons/FontAwesome'

const CustomInput = ({ changeIcon, touched, errors, onBlur, onChangeText, value, placeholder, icon, keyboardType, iconEye, iconEyeSlash, onPress, isEye }) => {
  const hide = hide;
  return (
    <View style={{ marginBottom: 30, }}>

      <View style={styles.formInput} >
        <View >
          {icon}
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
              (changeIcon ? <View>{ iconEye }</View> : <View>{ iconEyeSlash }</View>) : null}

          </View>
        </TouchableOpacity>

      </View>
      {errors && touched ? <Text style={styles.textErr}>{errors}</Text> : null}
    </View>


  )
}
const styles = StyleSheet.create({
  formInput: {
    flexDirection: 'row', alignItems: 'center', height: 58,
    borderColor: colors.text,
    borderWidth: 1,
    borderStyle: 'solid',
    padding: 10,
    color: colors.text,
    borderRadius: 10,
  },
  textInput: {
    fontSize: 16,
    fontWeight: '500',
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
export default CustomInput
import { View, Text, Image, StatusBar, TextInput, TouchableOpacity, SafeAreaView, KeyboardAvoidingView, TouchableWithoutFeedback, Platform } from 'react-native'
import React from 'react'
import styles from './style'
import colors from '../../../contains/colors'
import Icon from 'react-native-vector-icons/FontAwesome'
import VectorTop from '../../../assets/images/vector-top.svg'
import VectorBot from '../../../assets/images/vector-bot.svg'
import GoogleLogo from '../../../assets/images/_Google.svg'
import CustomInput from '../../components/CustomInput/CustomInput'
import CustomButton from '../../components/CustomButton/CustomButton'

export default SignUpScreen = () => {
  const onSignUp = () => {
    console.log("Sign Up");
  }
  const onSignUpGoogle = () => {
    console.log("Sign Up Google");
  }
  const onPressSignIn = () => {
    console.log("Sign In");
  }
  return (
    <SafeAreaView style={{ flex: 1 }}>

      {/* top */}
      <View style={{ maxHeight: 100, flexDirection: 'row' }}>

        <View style={styles.vectorTop}>
          <VectorTop />
        </View>
        {/* Title */}
        <View style={{ flex: 2, right: 100, top: 120 }}>
          <View >
            <Text style={styles.title}>Tạo tài khoản</Text>
          </View>
          <View style={{
            width: 271,
            height: 16,
          }}>
            <Text style={styles.subTitle}>Chào mừng bạn đến với Flashcard Master
            </Text>
          </View>
        </View>
      </View>
      {/* Form */}
      <View style={{ maxWidth: '100%', maxHeight: "100%" }}>
        {/* FormText */}
        <View style={{ marginHorizontal: 20, top: 100, maxHeight: 150 }}  >
          <CustomInput keyboardType="email-address" secureTextEntry={false} placeholder="Email" icon="envelope" />
          <CustomInput keyboardType="password" secureTextEntry={true} placeholder="Mật khẩu" icon="lock" iconEye="eye" />
          <CustomInput keyboardType="password" secureTextEntry={true} placeholder="Nhập lại mật khẩu" icon="lock" iconEye="eye" />
        </View>
        {/* BottomForm */}
        <View style={{ marginHorizontal: 20, maxWidth: '100%', maxHeight: "100%", marginTop: 200 }} >

          <CustomButton text="Đăng ký" onPress={onSignUp} hide="hide" />
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginVertical: 10 }}>
            <Text style={[styles.btnText, { color: colors.text }]}>Bạn đã có tài khoản?</Text>
            <TouchableOpacity activeOpacity={0.5} onPress={onPressSignIn}>
              <View>
                <Text style={{
                  fontWeight: '500',
                  fontSize: 16,
                  lineHeight: 24,
                  letterSpacing: 0.2,
                  color: colors.violet,
                  marginLeft: 5,
                  textDecorationLine: "underline",
                  textDecorationStyle: "solid",
                }}>
                  Đăng nhập
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <CustomButton text="Đăng ký bằng Google" onPress={onSignUpGoogle} type="GG" />

        </View>
        {/* bottom */}
        <View style={{  width: 418, height: 10 }}>
          <VectorBot />
        </View>
      </View>


    </SafeAreaView>
  )
}


import { View, Text, TouchableOpacity, SafeAreaView, ImageBackground } from 'react-native'
import React from 'react'
import styles from './style'
import colors from '../../../contains/colors'
import VectorTop from '../../../assets/images/vector-top.svg'
import VectorBot from '../../../assets/images/vector-bot.svg'
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
      <ImageBackground style={{height:830}} source={require('../../../assets/images/bgSignUp.png')} resizeMode="cover" >
        {/* top */}
        <View >
          {/* Title */}
          <View style={{   top: 120, marginLeft:20 }}>
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
        <View style={{top:50}} >
          {/* FormText */}
          <View style={{ marginHorizontal: 20, top: 100}}  >
            <CustomInput keyboardType="email-address" secureTextEntry={false} placeholder="Email" icon="envelope" />
            <CustomInput keyboardType="password" secureTextEntry={true} placeholder="Mật khẩu" icon="lock" iconEye="eye" />
            <CustomInput keyboardType="password" secureTextEntry={true} placeholder="Nhập lại mật khẩu" icon="lock" iconEye="eye" />
          </View>
          {/* BottomForm */}
          <View style={{ marginHorizontal: 20, maxWidth: '100%', maxHeight: 100, marginTop: 120 }} >
            <CustomButton text="Đăng ký" onPress={onSignUp} hide="hide" />
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginVertical: 10 }}>
              <Text style={[styles.btnText, { color: colors.text }]}>Bạn đã có tài khoản?</Text>
              <TouchableOpacity activeOpacity={0.5} onPress={onPressSignIn}>
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
              </TouchableOpacity>
            </View>
            <CustomButton text="Đăng ký bằng Google" onPress={onSignUpGoogle} type="GG" />

          </View>
          {/* bottom */}
        </View>
      </ImageBackground>

    </SafeAreaView>
  )
}


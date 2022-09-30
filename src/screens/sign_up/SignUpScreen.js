import { View, Text, Image, StatusBar, TextInput, TouchableOpacity, SafeAreaView, KeyboardAvoidingView, Platform } from 'react-native'
import React from 'react'
import styles from './style'
import colors from '../../../contains/colors'
import Icon from 'react-native-vector-icons/FontAwesome'
import VectorTop from '../../../assets/images/vector-top.svg'
import VectorBot from '../../../assets/images/vector-bot.svg'
import GoogleLogo from '../../../assets/images/_Google.svg'

export default SignUpScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.container}>
        {/* top */}
        <View style={{ flex: 1, flexDirection: 'row' }}>

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
        <KeyboardAvoidingView style={{ flex: 1 }} keyboardVerticalOffset={-100} behavior={Platform.OS === "ios" ? "padding" : "height"} >
          <View style={{ flex: 2, flexDirection: 'column', marginHorizontal: 20, top: -10 }}>
            {/* FormText */}

            <View   >
              <View style={styles.formInput} >
                <View >
                  <Icon name="envelope" size={16} color={colors.gray_secondary} />
                </View>
                <View style={{ flex: 1, marginLeft: 5 }} >
                  <TextInput style={styles.textInput}
                    placeholder="Email"
                    keyboardType="email-address"
                    placeholderTextColor={colors.gray_secondary}
                  />
                </View>
              </View>
              <View style={styles.formInput}>
                <View >
                  <Icon name="lock" size={16} color={colors.gray_secondary} />
                </View>
                <View style={{ flex: 1, marginLeft: 5 }}>
                  <TextInput style={styles.textInput}
                    placeholder="Mật khẩu"
                    keyboardType="password"
                    secureTextEntry={true}
                    placeholderTextColor={colors.gray_secondary}
                  />
                </View>
              </View>
              <View style={styles.formInput}>
                <View >
                  <Icon name="lock" size={16} color={colors.gray_secondary} />
                </View>
                <View style={{ flex: 1, marginLeft: 5 }}>
                  <TextInput style={styles.textInput}
                    placeholder="Nhập lại mật khẩu"
                    keyboardType="password"
                    secureTextEntry={true}
                    placeholderTextColor={colors.gray_secondary}
                  />
                </View>
              </View>

            </View>
            {/* BottomForm */}

            <View style={{marginTop:30}} >
              <TouchableOpacity style={styles.btnDangKy}>
                <View style={{
                  width: 335,
                  height: 48,
                  alignItems: "center",
                  justifyContent: "center",
                }}>
                  <Text style={styles.btnText}>Đăng ký</Text>
                </View>
              </TouchableOpacity>
              <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginVertical: 10 }}>
                <Text style={[styles.btnText, { color: colors.text }]}>Bạn đã có tài khoản?</Text>
                <TouchableOpacity>
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
              <View>
                <TouchableOpacity>
                  <View style={{
                    flexDirection: 'row',
                    backgroundColor: colors.pink,
                    height: 48,
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 10,
                  }}>
                    <View style={{}}>
                      <GoogleLogo />
                    </View>
                    <View style={{ marginLeft: 5 }}>
                      <Text style={{ color: colors.text, fontSize: 16, fontWeight: '500', lineHeight: 24, letterSpacing: 0.2 }}>Đăng ký bằng Google</Text>
                    </View>

                  </View>
                </TouchableOpacity>
              </View>
            </View>

          </View>
        </KeyboardAvoidingView>
        {/* bottom */}
        <View style={{ flex: 1,bottom:-15,width: 418, height: 400 }}>
          <VectorBot />
        </View>



      </View >

    </View>

  )
}


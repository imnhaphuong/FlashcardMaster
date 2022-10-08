import { View, Text, TouchableOpacity, SafeAreaView, ImageBackground } from 'react-native'
import styles from './style'
import colors from '../../../contains/colors'
import CustomInput from '../../components/CustomInput/CustomInput'
import CustomButton from '../../components/CustomButton/CustomButton'
import { Formik } from 'formik'
import { SignupSchema } from '../../../contains/validation'
import React, { useState } from 'react'


const SignInScreen = ({navigation, userInfo}) => {
    console.log("sign in "+userInfo);
  const [hide, setHide] = useState(true);
  const [reHide, setReHide] = useState(true);

  const changeSecureText = () => {
    if (hide == true) {
      setHide(false);
    } else {
      setHide(true);
    }
  }
  const onSignUpGoogle = () => {
    console.log("Sign Up Google");
  }
  const changeReSecureText = () => {
    if (reHide == true) {
      setReHide(false);
    } else {
      setReHide(true);
    }
  }
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ImageBackground style={{ height: 830 }} source={require('../../../assets/images/bgSignUp.png')} resizeMode="cover" >
        {/* top */}

        {/* Title */}
        <View style={{ top: 130, marginLeft: 20 }}>
          <View >
            <Text style={styles.title}>Đăng Nhập</Text>
          </View>
          <View style={{
            width: 271,
            height: 16,
          }}>
            <Text style={styles.subTitle}>Vui lòng đăng nhập để tiếp tục
            </Text>
          </View>
        </View>
        {/* Form */}
        <View style={{ top: 90 }} >
          {/* FormText */}
          <Formik
            initialValues={{
              password: '',
              rePassword: '',
              email: '',
            }}
            validateOnMount={true}
            validationSchema={SignupSchema}
            onSubmit={values => console.log(values)}
          >

            {({ handleChange, handleBlur, handleSubmit, values, touched, errors, isEye }) => (
              <View style={{ marginHorizontal: 20, top: 120 }}  >
                <CustomInput onChangeText={handleChange('email')} iconEye=" "
                  onBlur={handleBlur('email')} value={values.email} keyboardType="default" secureTextEntry={false} placeholder="Email" icon="envelope" errors={errors.email} touched={touched.email} isEye={false} />
                <CustomInput onChangeText={handleChange('password')} changeIcon={hide}
                  onBlur={handleBlur('password')} onPress={changeSecureText} secureTextEntry={hide} value={values.password} keyboardType="password" placeholder="Mật khẩu" icon="lock" iconEye="eye" errors={errors.password} touched={touched.password} isEye={true} />
                
                {/* BottomForm */}
                <View >
                  <CustomButton text="Đăng nhập" onPress={handleSubmit} hide="hide" />
                  <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginVertical: 10 }}>
                    <Text style={[styles.btnText, { color: colors.text }]}>Bạn chưa có tài khoản?</Text>
                    <TouchableOpacity activeOpacity={0.5} onPress={() => navigation.navigate("SignUp")}>
                      <Text style={styles.textSignIn}>
                        Đăng ký
                      </Text>
                    </TouchableOpacity>
                  </View>
                  <CustomButton text="Đăng nhập bằng Google" onPress={onSignUpGoogle} type="GG" />

                </View>
              </View>
            )}

          </Formik>
        </View>
      </ImageBackground>
    </SafeAreaView>
  )
}

export default SignInScreen
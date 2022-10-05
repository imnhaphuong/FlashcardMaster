import { View, Text, TouchableOpacity, SafeAreaView, ImageBackground } from 'react-native'
import React, { useRef, useState } from 'react'
import styles from './style'
import colors from '../../../contains/colors'
import CustomInput from '../../components/CustomInput/CustomInput'
import CustomButton from '../../components/CustomButton/CustomButton'
import { Formik, Form, Field } from 'formik'
import { SignupSchema } from '../../../contains/validation'
export default SignUpScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState();
  const [rePassword, setRePassword] = useState();



  const [hide, setHide] = useState(true);
  const [reHide, setReHide] = useState(true);

  const handleSubmit = () => {
    console.log("email");

  }
  const onSignUpGoogle = () => {
    console.log("Sign Up Google");
  }
  const onPressSignIn = () => {
    console.log("Sign In");
  }
  const changeSecureText = () => {
    if (hide == true) {
      setHide(false);
    } else {
      setHide(true);
    }
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
        <View style={{ top: 120, marginLeft: 20 }}>
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
        {/* Form */}
        <View style={{ top: 50 }} >
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
              <View style={{ marginHorizontal: 20, top: 100 }}  >
                <CustomInput onChangeText={handleChange('email')} iconEye=" "
                  onBlur={handleBlur('email')} value={values.email} keyboardType="default" secureTextEntry={false} placeholder="Email" icon="envelope" errors={errors.email} touched={touched.email} isEye={false} />
                <CustomInput onChangeText={handleChange('password')} changeIcon={hide}
                  onBlur={handleBlur('password')} onPress={changeSecureText} secureTextEntry={hide} value={values.password} keyboardType="password" placeholder="Mật khẩu" icon="lock" iconEye="eye" errors={errors.password} touched={touched.password} isEye={true} />
                <CustomInput onChangeText={handleChange('rePassword')} changeIcon={reHide}
                  onBlur={handleBlur('rePassword')} secureTextEntry={reHide} onPress={changeReSecureText} value={values.rePassword} keyboardType="password" placeholder="Nhập lại mật khẩu" icon="lock" iconEye="eye" errors={errors.rePassword} touched={touched.rePassword} isEye={true} />
                {/* BottomForm */}
                <View style={{ maxWidth: '100%', maxHeight: 100 }} >
                  <CustomButton text="Đăng ký" onPress={handleSubmit} hide="hide" />
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
              </View>
            )}

          </Formik>
        </View>
      </ImageBackground>
    </SafeAreaView>
  )
}


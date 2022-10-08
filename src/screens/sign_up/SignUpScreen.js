import { View, Text, TouchableOpacity, SafeAreaView, ImageBackground } from 'react-native'
import React, { useRef, useState } from 'react'
import styles from './style'
import colors from '../../../contains/colors'
import CustomInput from '../../components/CustomInput/CustomInput'
import CustomButton from '../../components/CustomButton/CustomButton'
import { Formik, } from 'formik'
import { SignupSchema } from '../../../contains/validation'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Spinner from 'react-native-loading-spinner-overlay'
import { useNavigation } from '@react-navigation/core'
import axios from 'axios'
import SysModal from '../../components/SysModal/SysModal'
import BgSignUp from '../../../assets/images/bgSignUp.svg'

export default SignUpScreen = ({ navigation }) => {

  const navi = useNavigation();
  const [isLoading, setLoading] = useState(false);
  const [userInfo, setUserInfo] = useState('');
  const [isSignUp, setSignUp] = useState(false)
  const [hide, setHide] = useState(true);
  const [reHide, setReHide] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [mess, setMess] = useState('');

  const onSignUpGoogle = () => {
    console.log("Sign Up Google");
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
  const submitData = async (values) => {

    setLoading(true)
    if (values.rePassword !== values.password) {
      setMess('Mật khẩu nhập lại chưa đúng');
      setShowModal(true);
      return;
    } else {
      try {
        await fetch("http://192.168.43.158:3000/api/user/create", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(values),
        }).then(res => res.json()
        ).then(data => {
          setMess('Đăng ký thành công');
          setShowModal(true);
          setSignUp(true)
          let userInfo = data;
          // AsyncStorage.setItem('user', JSON.parse(userInfo));
          // setUserInfo(userInfo);
          console.log("userInfo " +  userInfo);
          navigation.navigate("SignIn", {
            userInfo: userInfo
          });
          console.log("data ", data);
        })
      } catch (error) {
        console.log(error);
        setMess("Đăng ký thất bại");
        setShowModal(true);
      } finally {
        setLoading(false);
      }

    }
  };
  const onCloseAlert = () => {
    setShowModal(false);
    setLoading(false);
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <SysModal onClose={onCloseAlert} visible={showModal} message={mess} />
      <Spinner color={colors.violet} visible={isLoading} />
      {/* <ImageBackground height={100} width={300} style={{position: 'absolute',width: '100%', height: '100%'}} source={<BgSignUp/>} resizeMode="contain" > */}
      {/* <BgSignUp width={400} height={820} style={{position:'absolute',zIndex:0, envelope:0}} > */}
      <View style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        bottom: 0,
        zIndex: -1,
        left: 0,
        right: 0,
      }}>
        <BgSignUp width={400} height={820} />
      </View>

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
      <View style={{ top: 80 }} >
        {/* FormText */}
        <Formik
          initialValues={{
            email: '',
            password: '',
            rePassword: '',

          }}
          validateOnMount={true}
          validationSchema={SignupSchema}
          onSubmit={values => {
            submitData(values)
          }}
        >
          {({ handleChange, handleBlur, handleSubmit, values, touched, errors }) => (
            <View style={{ marginHorizontal: 20, top: 100 }}  >
              <CustomInput onChangeText={handleChange('email')} iconEye=" "
                onBlur={handleBlur('email')} value={values.email} keyboardType='default' secureTextEntry={false} placeholder="Email" icon="envelope" errors={errors.email} touched={touched.email} isEye={false} />
              <CustomInput onChangeText={handleChange('password')} changeIcon={hide}
                onBlur={handleBlur('password')} onPress={changeSecureText} secureTextEntry={hide} value={values.password} keyboardType="password" placeholder="Mật khẩu" icon="lock" iconEye="eye" errors={errors.password} touched={touched.password} isEye={true} />
              <CustomInput onChangeText={handleChange('rePassword')} changeIcon={reHide}
                onBlur={handleBlur('rePassword')} secureTextEntry={reHide} onPress={changeReSecureText} value={values.rePassword} keyboardType="password" placeholder="Nhập lại mật khẩu" icon="lock" iconEye="eye" errors={errors.rePassword} touched={touched.rePassword} isEye={true} />
              {/* BottomForm */}
              <View >
                <CustomButton text="Đăng ký" onPress={handleSubmit} hide="hide" />
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginVertical: 10 }}>
                  <Text style={styles.btnText}>Bạn đã có tài khoản?</Text>
                  <TouchableOpacity activeOpacity={0.5} onPress={() => navigation.navigate("SignIn")}>
                    <Text style={styles.textSignIn}>
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
    </SafeAreaView>
  )
}


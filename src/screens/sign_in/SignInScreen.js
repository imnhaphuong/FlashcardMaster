import { View, Text, ScrollView, TouchableOpacity, SafeAreaView, ImageBackground } from 'react-native'
import styles from './style'
import colors from '../../../contains/colors'
import CustomInput from '../../components/CustomInput/CustomInput'
import CustomButton from '../../components/CustomButton/CustomButton'
import { Formik } from 'formik'
import { SignInSchema } from '../../../contains/validation'
import React, { useEffect, useState } from 'react'
import LockIcon from '../../../assets/images/lock.svg'
import EnvelopeIcon from '../../../assets/images/message.svg'
import EyeIcon from '../../../assets/images/eye.svg'
import EyeSlashIcon from '../../../assets/images/no-eye.svg'
import BgSignUp from '../../../assets/images/bgSignUp.svg'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Spinner from 'react-native-loading-spinner-overlay'
import SysModal from '../../components/SysModal/SysModal'

export default SignInScreen = ({ navigation }) => {


  const [hide, setHide] = useState(true);
  const [isLoading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(false);



  const [mess, setMess] = useState('');

  const lock = <LockIcon />
  const envelope = <EnvelopeIcon />
  const eye = <EyeIcon />
  const eyeSlash = <EyeSlashIcon />

  const showModa = () => {
    setTimeout(() => {
      setShowModal(false);
      setLoading(false);
    }, 2000);
  };

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

  // React function hook && react funtion 

  // useEffect(() => {
  //   AsyncStorage.getItem('Id').then(result => {
  //     setUserId(result);
  //   })
  // }, [])
  const submitData = async (values) => {
    setLoading(true)
    try {
      await fetch("https://flashcard-master.vercel.app/api/users/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(values),
      }).then(res => res.json()
      ).then(data => {
        let email = data.email;
        let password = data.password;
        setEmail(email);
        setPassword(password);
        showModa()
        AsyncStorage.setItem('user', JSON.stringify(data));
        if (values.email === email && values.password === password) {
          console.log("values", data);
          navigation.push("Navi")
        }
        
      })
    } catch (error) {
      console.log(error);
      setMess("Email hoặc mật khẩu chưa đúng");
      console.log("khum");
      setShowModal(true);
      showModa();
    }

  };



  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Spinner color={colors.violet} visible={isLoading} />
      <SysModal  visible={showModal} message={mess} />
      <ScrollView scrollEnabled={false} contentContainerStyle={{ flex: 1 }}>
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
        <View style={{ top: 80 }} >
          {/* FormText */}
          <Formik
            initialValues={{
              email: '',
              password: '',
            }}
            validateOnMount={true}
            validationSchema={SignInSchema}
            onSubmit={(values, { resetForm }) => {
              submitData(values)
              // resetForm();
            }}
          >
            {({ handleChange, handleBlur, handleSubmit, values, touched, errors }) => (
              <View style={{ marginHorizontal: 20, top: 120 }}  >
                <CustomInput onChangeText={handleChange('email')} iconEye=" "
                  onBlur={handleBlur('email')} value={values.email} keyboardType='default' secureTextEntry={false} placeholder="Email" icon={envelope} errors={errors.email} touched={touched.email} isEye={false} />
                <CustomInput onChangeText={handleChange('password')} changeIcon={hide}
                  onBlur={handleBlur('password')} onPress={changeSecureText} secureTextEntry={hide} value={values.password} keyboardType="password" placeholder="Mật khẩu" icon={lock} iconEye={eye} iconEyeSlash={eyeSlash} errors={errors.password} touched={touched.password} isEye={true} />
                {/* BottomForm */}
                <View >
                  <CustomButton text="Đăng nhập" onPress={handleSubmit} hide="hide" />
                  <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginVertical: 10 }}>
                    <Text style={[styles.btnText, { color: colors.text }]}>Bạn chưa có tài khoản?</Text>
                    <TouchableOpacity activeOpacity={0.5} onPress={() => {
                      // useFormik().resetForm();
                      navigation.navigate("SignUp")
                    }}>
                      <Text style={styles.textSignIn}>
                        Đăng ký
                      </Text>
                    </TouchableOpacity>
                  </View>
                  <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginVertical: 5 }}>
                    <TouchableOpacity activeOpacity={0.5} onPress={() => navigation.navigate("SignUp")}>
                      <Text style={styles.textSignIn}>
                        Quên mật khẩu?
                      </Text>
                    </TouchableOpacity>
                  </View>
                  <CustomButton text="Đăng nhập bằng Google" onPress={onSignUpGoogle} type="GG" />
                </View>
              </View>
            )}
          </Formik>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

import { View, Text, ScrollView, TouchableOpacity, SafeAreaView, ImageBackground } from 'react-native'
import styles from './style'
import colors from '../../../contains/colors'
import CustomInput from '../../components/CustomInput/CustomInput'
import CustomButton from '../../components/CustomButton/CustomButton'
import { Formik } from 'formik'
import { SignInSchema } from '../../../contains/validation'
import React, { useEffect, useState } from 'react'
import LockIcon from '../../../assets/images/sign_up/lock.svg'
import EnvelopeIcon from '../../../assets/images/sign_up/message.svg'
import EyeIcon from '../../../assets/images/sign_up/eye.svg'
import EyeSlashIcon from '../../../assets/images/sign_up/no-eye.svg'
import BgSignUp from '../../../assets/images/sign_up/bgSignUp.svg'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Spinner from 'react-native-loading-spinner-overlay'
import SysModal from '../../components/SysModal/SysModal'
import ModalOption from '../../components/ModalOption/ModalOption'

export default SignInScreen = ({ navigation }) => {


  const [hide, setHide] = useState(true);
  const [isLoading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [type, setType] = useState("");
  const [showOptions, setShowOptions] = useState(true);
  const [email, setEmail] = useState(null);


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
      const result = await fetch("https://flashcard-master.vercel.app/api/users/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(values),
      }).then(res => res.json()
      )
      if (result.status === 'error') {
        // everythign went fine
        setMess(result.message);
        setShowModal(true);
        showModa();
      } else if (result.status === 'errorVerified') {
        setMess(result.message);
        console.log(result.message);
        setShowModal(true);
        showModa();
        setTimeout(() => {
          navigation.replace("VerifyEmail")
        }, 1000);
      } else {
        console.log("data", result);
        setLoading(false)
        AsyncStorage.setItem('accessToken', result.token);
        AsyncStorage.setItem('userId', result.data._id);
        setEmail(result.data.email);
        //Check type user
        setType(result.data.type);
        if (result.data.type !== 0) {
          setTimeout(() => {
            navigation.replace("nav")
          }, 1000);
        }
      }
    } catch (error) {
      console.log(error);
      setMess("Email hoặc mật khẩu chưa đúng");
      console.log("khum");
      setShowModal(true);
      showModa();
    }

  };
  const chooseClass = async () => {
    console.log("email", email);
    const data = {
      email: email,
    }
    try {
       await fetch("http://192.168.43.158:3000/api/users/type-class", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      }).then(res => res.json()
      )
      setShowOptions(false);
      setTimeout(() => {
        navigation.replace("nav")
      }, 1000);
    } catch (err) {
      setMess(err);
      setShowModal(true);
      showModa();
    }
  }
  const choosePersonal = async () => {
    const data = {
      email: email,
    }
    try {
      await fetch("http://192.168.43.158:3000/api/users/type-personal", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      }).then(res => res.json()
      )
      setShowOptions(false);
      setTimeout(() => {
        navigation.replace("nav")
      }, 1000);
    } catch (err) {
      setMess(err);
      setShowModal(true);
      showModa();
    }
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {type === 0 ? <ModalOption visible={showOptions} chooseClass={chooseClass} choosePersonal={choosePersonal} /> : ""}

      <Spinner color={colors.violet} visible={isLoading} />
      <SysModal visible={showModal} message={mess} />
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
            onSubmit={async (values, { resetForm }) => {
              await submitData(values)
              resetForm();
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

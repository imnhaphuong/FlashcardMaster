import { View, Text, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './style'
import colors from '../../../contains/colors'
import CustomInput from '../../components/CustomInput/CustomInput'
import CustomButton from '../../components/CustomButton/CustomButton'
import { Formik, } from 'formik'
import { SignupSchema } from '../../../contains/validation'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Spinner from 'react-native-loading-spinner-overlay'
import SysModal from '../../components/SysModal/SysModal'
import BgSignUp from '../../../assets/images/sign_up/bgSignUp.svg'
import LockIcon from '../../../assets/images/sign_up/lock.svg'
import EnvelopeIcon from '../../../assets/images/sign_up/message.svg'
import EyeIcon from '../../../assets/images/sign_up/eye.svg'
import EyeSlashIcon from '../../../assets/images/sign_up/no-eye.svg'
import * as Google from 'expo-auth-session/providers/google';
import * as WebBrowser from 'expo-web-browser';



// WebBrowser.maybeCompleteAuthSession();

export default SignUpScreen = ({ navigation }) => {


  const [isLoading, setLoading] = useState(false);
  const [signUp, setSignUp] = useState(false)
  const [hide, setHide] = useState(true);
  const [reHide, setReHide] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [mess, setMess] = useState('');
  const [user, setUser] = useState(null)
  const lock = <LockIcon />
  const envelope = <EnvelopeIcon />
  const eye = <EyeIcon />
  const eyeSlash = <EyeSlashIcon />
  const [accessToken, setAccessToken] = useState(null);
  // const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
  //   clientId: process.env.CLIENT_ID,
  //   androidClientId: process.env.ANDOID_CLIENT_ID,
  //   iosClientId: process.env.IOS_CLIENT_ID,
  // });
  // useEffect(()=>{
  //   if(response?.type === "success"){
  //     setAccessToken(response.authentication.accessToken);
  //     accessToken && fetchUserInfo();
  //   }
  // },[response,accessToken]);
  // const [googleSubmitting, setGoogleSubmitting] = useState(false)
  // const request = new Google.AuthRequest({  });
  async function fetchUserInfo(){
    let response = await fetch("https://www.googleapis.com/userinfo/v2/me",{
      headers: { 
        Authorization: `Bear ${accessToken}`
      }
    })
    const userInfo = await response.json();
    setUser(userInfo);
    AsyncStorage.setItem('userGG',JSON.stringify(userInfo));
    
  }
  const showModa = () => {
    setTimeout(() => {
      setShowModal(false);
      setLoading(false);
    }, 2000);
  };

  // const onSignUpGoogle = () => {
  //   console.log("Sign Up Google");
  //   setGoogleSubmitting(true);
  //   const config = {

  //     scopes: ['profile', 'email']
  //   };
  //   // Google.promptAsync()
  //   request.promptAsync(discovery, { useProxy: true }).then((result) => {
  //     const { type, user } = result;
  //     const { email, displayName, photoUrl } = user;
  //     if (type === 'success') {
  //       handleMessage("Google signin succeeful", 'SUCCESS');
  //       setTimeout(() => navigation.navigate('Navi', { email, displayName, photoUrl }))
  //     } else {
  //       handleMessage("Google signin was cancelled");
  //     }
  //     setGoogleSubmitting(false);
  //   }).catch(err => {
  //     console.log(err);
  //     handleMessage("An error occurred. Check your network and try again");
  //     setGoogleSubmitting(false);
  //   })
  // }
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
      showModa();
      return;
    } else {
      const result = await fetch("https://flashcard-master.vercel.app/api/users/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      }).then(res => res.json()
      )
      console.log("status", result);
      if (result.status === 'ok') {
        // everythign went fine

        AsyncStorage.setItem('userId', result.user._id);
        AsyncStorage.setItem('userInfo', JSON.stringify(result.user));

        setTimeout(() => {
          navigation.push("verify_email")
        }, 1000);
      } else {
        console.log(result.error);
        setMess(result.error);
        setShowModal(true);
        showModa();
      }

    }


  };
  const ShowUserInfo = () => {
    if(user) {
      return(
        <Text style={styles.subTitle}>{user.name}
            </Text>
      )
    }
  } 

  return (
    <SafeAreaView style={{ flex: 1 }}>
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
            {user && <ShowUserInfo />}
           
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
            onSubmit={async (values, { resetForm }) => {
              await submitData(values)
              resetForm();
            }}
          >
            {({ handleChange, handleBlur, handleSubmit, values, touched, errors }) => (
              <View style={{ marginHorizontal: 20, top: 100 }}  >
                <CustomInput onChangeText={handleChange('email')} iconEye=" "
                  onBlur={handleBlur('email')} value={values.email} keyboardType='default' secureTextEntry={false} placeholder="Email" icon={envelope} errors={errors.email} touched={touched.email} isEye={false} />
                <CustomInput onChangeText={handleChange('password')} changeIcon={hide}
                  onBlur={handleBlur('password')} onPress={changeSecureText} secureTextEntry={hide} value={values.password} keyboardType="password" placeholder="Mật khẩu" icon={lock} iconEye={eye} iconEyeSlash={eyeSlash} errors={errors.password} touched={touched.password} isEye={true} />
                <CustomInput onChangeText={handleChange('rePassword')} changeIcon={reHide}
                  onBlur={handleBlur('rePassword')} secureTextEntry={reHide} onPress={changeReSecureText} value={values.rePassword} keyboardType="password" placeholder="Nhập lại mật khẩu" icon={lock} iconEye={eye} iconEyeSlash={eyeSlash} errors={errors.rePassword} touched={touched.rePassword} isEye={true} />
           
                <View style={{ top: 10 }}>
                  <CustomButton text="Đăng ký" onPress={handleSubmit} hide="hide" />
                  <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 10 }}>
                    <Text style={styles.btnText}>Bạn đã có tài khoản?</Text>
                    <TouchableOpacity activeOpacity={0.5} onPress={() => navigation.navigate("sign_in")}>
                      <Text style={styles.textSignIn}>
                        Đăng nhập
                      </Text>
                    </TouchableOpacity>
                  </View>
                  {/* {!googleSubmitting && ( */}
                  <CustomButton text="Đăng ký bằng Google" onPress={()=>{
                    promptAsync();
                  }} type="GG" />

                  {/* )} */}

                </View>
              </View>
            )}
          </Formik>
          
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}


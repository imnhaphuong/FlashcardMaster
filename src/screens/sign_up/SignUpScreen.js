import { View, Text, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native'
import React, { useState } from 'react'
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
// import * as Google from 'expo-auth-session';
// import { GoogleSignin } from '@react-native-google-signin/google-signin'




export default SignUpScreen = ({ navigation }) => {

  componentDidMount = () => {
    // GoogleSignin.configure({
    //   webClientId: '295207311716-m98mtlav7avs9964qvi5dl8bvb7tud0n.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
    //   offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
    //   hostedDomain: '', // specifies a hosted domain restriction
    //   forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
    //   accountName: '', // [Android] specifies an account name on the device that should be used
    //   iosClientId: '<FROM DEVELOPER CONSOLE>', // [iOS] if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
    //   googleServicePlistPath: '', // [iOS] if you renamed your GoogleService-Info file, new name here, e.g. GoogleService-Info-Staging
    //   openIdRealm: '', // [iOS] The OpenID2 realm of the home web server. This allows Google to include the user's OpenID Identifier in the OpenID Connect ID token.
    //   profileImageSize: 120, // [iOS] The desired height (and width) of the profile image. Defaults to 120px
    // });
  }

  const [isLoading, setLoading] = useState(false);
  const [signUp, setSignUp] = useState(false)
  const [hide, setHide] = useState(true);
  const [reHide, setReHide] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [mess, setMess] = useState('');
  const [userInfo, setUserInfo] = useState('')
  const lock = <LockIcon />
  const envelope = <EnvelopeIcon />
  const eye = <EyeIcon />
  const eyeSlash = <EyeSlashIcon />
  // const [googleSubmitting, setGoogleSubmitting] = useState(false)
  // const request = new Google.AuthRequest({  });

  const showModa = () => {
    setTimeout(() => {
      setShowModal(false);
      setLoading(false);
    }, 2000);
  };

  const onSignUpGoogle = () => {
    console.log("Sign Up Google");
    // setGoogleSubmitting(true);
    // const config = {
    //   webClientId: `295207311716-m98mtlav7avs9964qvi5dl8bvb7tud0n.apps.googleusercontent.com`,
    //   androidClientId: `295207311716-nm4vh7ii73hfvj1ugqhrub34ctd5jkfm.apps.googleusercontent.com`,
    //   scopes: ['profile', 'email']
    // };
    // // Google.promptAsync()
    // request.promptAsync(discovery, { useProxy: true }).then((result) => {
    //   const { type, user } = result;
    //   const { email, displayName, photoUrl } = user;
    //   if (type === 'success') {
    //     handleMessage("Google signin succeeful", 'SUCCESS');
    //     setTimeout(() => navigation.navigate('Navi', { email, displayName, photoUrl }))
    //   } else {
    //     handleMessage("Google signin was cancelled");
    //   }
    //   setGoogleSubmitting(false);
    // }).catch(err => {
    //   console.log(err);
    //   handleMessage("An error occurred. Check your network and try again");
    //   setGoogleSubmitting(false);
    // })
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
      showModa();
      return;
    } else {
      console.log("values", values.email);
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
        setMess('Đăng ký thành công');
        setShowModal(true);
        showModa();
        AsyncStorage.setItem('userId', result.userId);
        setTimeout(() => {

          navigation.push("VerifyEmail")
        }, 1000);
      } else {
        console.log(result.error);
        setMess(result.error);
        setShowModal(true);
        showModa();
      }

    }


  };


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
                {/* BottomForm */}
                <View style={{ top: 10 }}>
                  <CustomButton text="Đăng ký" onPress={handleSubmit} hide="hide" />
                  <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 10 }}>
                    <Text style={styles.btnText}>Bạn đã có tài khoản?</Text>
                    <TouchableOpacity activeOpacity={0.5} onPress={() => navigation.navigate("SignIn")}>
                      <Text style={styles.textSignIn}>
                        Đăng nhập
                      </Text>
                    </TouchableOpacity>
                  </View>
                  {/* {!googleSubmitting && ( */}
                    <CustomButton text="Đăng ký bằng Google" onPress={onSignUpGoogle} type="GG" />

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


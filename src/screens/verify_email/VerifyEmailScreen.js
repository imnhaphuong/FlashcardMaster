import { View, Text, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import BgSignUp from '../../../assets/images/sign_up/bgSignUp.svg'
import colors from '../../../contains/colors'
import styles from './style'
import CustomInputOTP from '../../components/CustomInputOTP/CustomInputOTP'
import { Formik } from 'formik'
import { OTPSchema } from '../../../contains/validation'
import CustomButton from '../../components/CustomButton/CustomButton'
import AsyncStorage from '@react-native-async-storage/async-storage'
import SysModal from '../../components/SysModal/SysModal'
import Spinner from 'react-native-loading-spinner-overlay'
import CountDown from 'react-native-countdown-component';
import Reload from '../../../assets/images/sign_up/reload.svg'

export default VerifyEmailScreen = ({ navigation }) => {

    const [isLoading, setLoading] = useState(false);
    const [mess, setMess] = useState('');
    const [userId, setUserId] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [user, setUser] = useState(null);

    // React function hook && react funtion 
    useEffect(() => {
        AsyncStorage.getItem('userId').then(result => {
            setUserId(result);
        })
        AsyncStorage.getItem('userInfo').then(result => {
            setUser(result);
        })
    }, [])
    const [timerCount, setTimer] = useState(180)
    useEffect(() => {
        let interval = setInterval(() => {
            setTimer(lastTimerCount => {
                lastTimerCount <= 1 && clearInterval(interval)
                return lastTimerCount - 1
            })
        }, 1000) //each count lasts for a second
        //cleanup the interval on complete
        return () => clearInterval(interval)
    }, []);
    const showModa = () => {
        setTimeout(() => {
            setShowModal(false);
            setLoading(false);
        }, 1000);
    };
    const submitData = async (values) => {
        setLoading(true)
        const { otp } = values;
        console.log("otp", otp);
        const data = {
            otp: otp,
            userId: userId
        }
        console.log(data);
        try {
            const result = await fetch("http://192.168.43.158:3000/api/users/verify-email", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify(data),
            }).then(res => res.json()
            )
            console.log("result", result);
            if (result.status === 'success') {
                setLoading(false)
                setTimeout(() => {
                    navigation.push("sign_in")
                }, 1000);
            } else {
                console.log(result.message);
                setMess(result.message)
                setShowModal(true);
                showModa();
            }

        } catch (error) {
            console.log(error);
            // setMess("Email hoặc mật khẩu chưa đúng");
            console.log("khum");
            // setShowModal(true);
            // showModa();
        }
    }
    const sendVerification = async () => {
        setLoading(true)
        console.log("send verification");
        const { email } = JSON.parse(user);
        const data = {
            userId: userId,
            email: email,
        }
        console.log("email", email);
        try {
            const result = await fetch("http://192.168.43.158:3000/api/users/send-verification", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify(data),
            }).then(res => res.json()
            )
            setLoading(false)
            navigation.replace("verify_email")
        } catch (err) {
            console.log(err);
            setLoading(false)
        }
    }
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: colors.white }}>
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
                <View style={{ top: 180, marginLeft: 20 }}>
                    <View >
                        <Text style={styles.title}>Xác nhận tài khoản</Text>
                    </View>
                    <View >
                        <Text style={styles.subTitle}>Vui lòng kiểm tra email, nhập mã vào bên dưới
                        </Text>
                    </View>
                </View>
                {/* Form */}
                <Formik
                    initialValues={{
                        otp: '',

                    }}
                    validateOnMount={true}
                    validationSchema={OTPSchema}
                    onSubmit={async (values) => {
                        await submitData(values)
                        // resetForm();
                    }}
                >
                    {({ handleChange, handleSubmit, values, touched }) => (
                        <View>
                            <View style={{ top: 250, marginHorizontal: 20, flexDirection: 'row', justifyContent: 'space-between', }} >
                                <CustomInputOTP onChangeText={handleChange('otp')}
                                    value={values.otp} keyboardType='numeric'
                                    autoFocus={true}
                                    touched={touched.otp}
                                />

                            </View>

                            <View style={{ marginTop: 260, marginHorizontal: 20 }}>
                                <CountDown
                                    until={10}
                                    size={25}
                                    digitStyle={{ backgroundColor: '#FFF' }}
                                    digitTxtStyle={{ color: colors.violet }}
                                    timeToShow={['M', 'S']}
                                    timeLabels={{ m: null, s: null }}
                                    showSeparator
                                    running="false"
                                />
                                <TouchableOpacity style={{
                                    alignItems: 'center',justifyContent:'center' ,marginVertical: 30,  flexDirection: 'row',
                                }} activeOpacity={0.5} onPress={sendVerification}>
                                    <Reload />
                                    <Text style={styles.textSignIn}>
                                        Gửi lại mã
                                    </Text>
                                </TouchableOpacity>
                                <CustomButton onPress={handleSubmit} hide="hide" text="Xác nhận" />
                            </View>
                        </View>

                    )}
                </Formik>



            </ScrollView>
        </SafeAreaView >
    )

}
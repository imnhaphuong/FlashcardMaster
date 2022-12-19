import { View, Text, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import BgSignUp from '../../../assets/images/sign_up/bgSignUp.svg'
import colors from '../../../contains/colors'
import styles from './style'
import CustomInputOTP from '../../components/CustomInputOTP/CustomInputOTP'
import { Formik } from 'formik'
import { OTPSchema } from '../../../contains/validation'
import CustomButton from '../../components/CustomButton/CustomButton'
import SysModal from '../../components/SysModal/SysModal'
import Spinner from 'react-native-loading-spinner-overlay'
import CountDown from 'react-native-countdown-component';
import Reload from '../../../assets/images/sign_up/reload.svg'
import { updateEmail } from '../../../getdata/updateProfile'

export default VerifyEmailAgain = (props) => {
    const userId = props.route.params.userId
    const email = props.route.params.email
    const [isLoading, setLoading] = useState(false);
    const [mess, setMess] = useState('');
    const [showModal, setShowModal] = useState(false);
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
        const data = {
            otp: otp,
            userId: props.route.params.userId
        }
        try {
            const result = await fetch("https://flashcard-master.vercel.app/api/users/verifyEmailAgain", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify(data),
            }).then(res => res.json()
            )
            if (result.status === 'success') {
                const newEmail = await updateEmail(userId, email)
                if (newEmail) {
                    setLoading(false)
                    setTimeout(() => {
                        props.navigation.push("sign_in")
                    }, 1000);
                }
            } else {
                console.log(result.message);
                setMess(result.message)
                setShowModal(true);
                showModa();
            }

        } catch (error) {
            console.log(error);
            //setMess("Email hoặc mật khẩu chưa đúng");
            console.log("khum");
            // setShowModal(true);
            // showModa();
        }
    }
    const sendVerification = async () => {
        setLoading(true)
        //const { email } = JSON.parse(user);
        const data = {
            userId: props.route.params.userId,
            email: props.route.params.email,
        }
        console.log("send verification", data);
        try {
            const result = await fetch("https://flashcard-master.vercel.app/api/users/sendVerifyAgain", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify(data),
            }).then(res => res.json()
            ).then(data => console.log("data", data))
            setLoading(false)
            //navigation.replace("verifyEmailAgain")
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
                                    until={60 * 10}
                                    size={25}
                                    digitStyle={{ backgroundColor: '#FFF' }}
                                    digitTxtStyle={{ color: colors.violet }}
                                    timeToShow={['M', 'S']}
                                    timeLabels={{ m: null, s: null }}
                                    showSeparator
                                    running="false"
                                />
                                <TouchableOpacity style={{
                                    alignItems: 'center', justifyContent: 'center', marginVertical: 30, flexDirection: 'row',
                                }} activeOpacity={0.5} onPress={() => sendVerification()}>
                                    <Reload />
                                    <Text style={styles.textSignIn}>
                                        Gửi mã
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
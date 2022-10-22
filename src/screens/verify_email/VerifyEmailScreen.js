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


export default VerifyEmailScreen = ({ navigation }) => {
    const ref_input2 = useRef();
    const ref_input3 = useRef();
    const ref_input4 = useRef();
    const [isLoading, setLoading] = useState(false);
    const [mess, setMess] = useState('');
    const [userId, setUserId] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [user,setUser] = useState(null)

    // React function hook && react funtion 
    useEffect(() => {
        AsyncStorage.getItem('userId').then(result => {
            setUserId(result);
        })
        // AsyncStorage.getItem('userGG').then(result => {
        //     setUser(result);
        // })
    }, [])
    const showModa = () => {
        setTimeout(() => {
            setShowModal(false);
            setLoading(false);
        }, 1000);
    };
    const submitData = async (values) => {
        setLoading(true)

        const { number1, number2, number3, number4 } = values;
        const otp = number1 + number2 + number3 + number4
        console.log("otp", otp);
        const data = {
            otp: otp,
            userId: userId
        }
        console.log(data);
        try {
            const result = await fetch("https://flashcard-master.vercel.app/api/users/verify-email", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify(data),
            }).then(res => res.json()
            )
            console.log("result",result);
            if (result.status === 'success') {
                setLoading(false)
                setTimeout(() => {
                    navigation.push("SignIn")
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
                <View style={{ top: 180, marginLeft: 20 }}>
                    <View >
                        <Text style={styles.title}>Xác nhận tài khoản</Text>
                    </View>
                    <View >
                        <Text style={styles.subTitle}>{user}
                        </Text>
                    </View>
                </View>
                {/* Form */}
                <Formik
                    initialValues={{
                        number1: '',
                        number2: '',
                        number3: '',
                        number4: '',

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
                            <View style={{ top: 280, marginHorizontal: 20, flexDirection: 'row', justifyContent: 'space-between', }} >
                                <CustomInputOTP onChangeText={handleChange('number1')}
                                    value={values.number1} keyboardType='numeric'
                                    returnKeyType="next"
                                    autoFocus={true}
                                    touched={touched.number1}
                                    onSubmitEditing={() => ref_input2.current.focus()}
                                />
                                <CustomInputOTP onChangeText={handleChange('number2')}
                                    forwardRef={ref_input2}
                                    value={values.number2} keyboardType='numeric'
                                    returnKeyType="next"
                                    touched={touched.number2}
                                    onSubmitEditing={() => ref_input3.current.focus()} />
                                <CustomInputOTP onChangeText={handleChange('number3')}
                                    forwardRef={ref_input3}
                                    value={values.number3} keyboardType='numeric'
                                    returnKeyType="next"
                                    touched={touched.number3}
                                    onSubmitEditing={() => ref_input4.current.focus()} />
                                <CustomInputOTP onChangeText={handleChange('number4')}
                                    forwardRef={ref_input4}
                                    value={values.number4} keyboardType='numeric'
                                    returnKeyType="next"
                                    touched={touched.number4}
                                />

                            </View>
                            <View style={{ marginTop: 367, marginHorizontal: 20 }}>
                                <CustomButton onPress={handleSubmit} hide="hide" text="Xác nhận" />
                            </View>
                        </View>

                    )}
                </Formik>

            </ScrollView>
        </SafeAreaView >
    )

}
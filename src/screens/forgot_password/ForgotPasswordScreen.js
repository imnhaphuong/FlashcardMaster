
import { View, Text, ScrollView, TouchableOpacity, SafeAreaView, ImageBackground } from 'react-native'
import styles from './style'
import colors from '../../../contains/colors'
import CustomInput from '../../components/CustomInput/CustomInput'
import CustomButton from '../../components/CustomButton/CustomButton'
import { Formik } from 'formik'
import { ForgotSchema } from '../../../contains/validation'
import React, { useEffect, useState } from 'react'
import LockIcon from '../../../assets/images/sign_up/lock.svg'
import EnvelopeIcon from '../../../assets/images/sign_up/message.svg'
import EyeIcon from '../../../assets/images/sign_up/eye.svg'
import EyeSlashIcon from '../../../assets/images/sign_up/no-eye.svg'
import BgSignUp from '../../../assets/images/sign_up/bgSignUp.svg'

import Spinner from 'react-native-loading-spinner-overlay'

const ForgotPasswordScreen = () => {
    const [hide, setHide] = useState(true);
    const [isLoading, setLoading] = useState(false);

    const lock = <LockIcon />
    const envelope = <EnvelopeIcon />
    const eye = <EyeIcon />
    const eyeSlash = <EyeSlashIcon />

    const changeSecureText = () => {
        if (hide == true) {
            setHide(false);
        } else {
            setHide(true);
        }
    }
    return (
        <SafeAreaView style={{ flex: 1 }}>


            <Spinner color={colors.violet} visible={isLoading} />
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
                <View style={{ top: 130, marginLeft: 20, height: 50 }}>
                    <Text style={styles.title}>Quên mật khẩu</Text>
                </View>
                {/* Form */}
                <View style={{ top: 80 }} >
                    {/* FormText */}
                    <Formik
                        initialValues={{
                            newPassword: '',
                            rePassword: '',
                        }}
                        validateOnMount={true}
                        validationSchema={ForgotSchema}
                        onSubmit={async (values, { resetForm }) => {
                            await submitData(values)
                            resetForm();
                        }}
                    >
                        {({ handleChange, handleBlur, handleSubmit, values, touched, errors }) => (
                            <View style={{ marginHorizontal: 20, top: 120 }}  >
                                <CustomInput onChangeText={handleChange('newPassword')} changeIcon={hide}
                                    onBlur={handleBlur('newPassword')} onPress={changeSecureText} secureTextEntry={hide} value={values.newPassword} keyboardType="newPassword" placeholder="Mật khẩu mới" icon={lock} iconEye={eye} iconEyeSlash={eyeSlash} errors={errors.newPassword} touched={touched.newPassword} isEye={true} />
                                <CustomInput onChangeText={handleChange('rePassword')} changeIcon={hide}
                                    onBlur={handleBlur('rePassword')} onPress={changeSecureText} secureTextEntry={hide} value={values.rePassword} keyboardType="rePassword" placeholder="Nhập lại mật khẩu" icon={lock} iconEye={eye} iconEyeSlash={eyeSlash} errors={errors.rePassword} touched={touched.rePassword} isEye={true} />
                                {/* BottomForm */}
                                <View >
                                    <CustomButton text="Xác nhận" onPress={handleSubmit} hide="hide" />

                                </View>
                            </View>
                        )}
                    </Formik>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default ForgotPasswordScreen
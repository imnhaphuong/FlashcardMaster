import React from "react";
import {
    Text,
    View,
    StatusBar,
    SafeAreaView,
    TouchableOpacity,
    Alert,
    ScrollView,
} from "react-native";
import { useState } from "react";
import styles from "./style";
import Back from "../../../assets/images/header/back.svg";
import colors from "../../../contains/colors";
import InputChangePassword from "../../components/CustomInputChangePass";
import { updatePassword } from "../../../getdata/updatePassword";
import { useSelector } from "react-redux";



const ChangePassword_Screen = (props) => {
    const { user } = useSelector(state => state.user);
    const [errorMessage, setErrorMessage] = useState();
    const [successMessage, setSuccessMessage] = useState();
    const [inputs, setInputs] = useState({
        oldpassword: '',
        newpassword: '',
        repeatnewpassword: '',
    });

    const handleOnChange = (text, input) => {
        setInputs((prevState) => ({ ...prevState, [input]: text }));
    };

    const handleError = (errorMessage, input) => {
        setError((prevState) => ({ ...prevState, [input]: errorMessage }))
    }
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar
                animated={true}
                backgroundColor={colors.white}
                barStyle={"dark-content"}
                showHideTransition={"fade"}
            />
            <View style={styles.header}>
                <TouchableOpacity onPress={() => {
                    props.navigation.goBack()
                }}>
                    <Back />
                </TouchableOpacity>

                <Text style={styles.textHeader}>Đổi mật khẩu</Text>
            </View>
            <ScrollView>
                <View style={styles.content}>
                    {errorMessage && <Text style={{ color: "#DD0000" }}>{errorMessage}</Text>}
                    {successMessage && <Text style={{ color: "#2cb67d'" }}>{successMessage}</Text>}
                    <InputChangePassword
                        label="Mật khẩu cũ"
                        onChangeText={(text) => handleOnChange(text, 'oldpassword')}
                    />
                    <InputChangePassword
                        label="Mật khẩu mới"
                        onChangeText={(text) => handleOnChange(text, 'newpassword')}
                    />
                    <InputChangePassword
                        label="Nhập lại mật khẩu mới"
                        onChangeText={(text) => handleOnChange(text, 'repeatnewpassword')}
                    />
                    <TouchableOpacity
                        style={styles.btn}
                        activeOpacity={0.7}
                        onPress={async () => {
                            if (inputs.oldpassword.length > 0 && inputs.newpassword.length > 0 && inputs.repeatnewpassword.length > 0) {
                                if (inputs.newpassword === inputs.repeatnewpassword) {
                                    const result = await updatePassword(user.email, inputs.oldpassword, inputs.newpassword)
                                    if (result.staus === "SUCCESS") {
                                        setErrorMessage(undefined)
                                        setSuccessMessage("Thay đổi mật khẩu thành công ^o^")
                                    } else {
                                        setErrorMessage("Mật khẩu không hợp lệ")
                                    }
                                }
                                else {
                                    setErrorMessage("Mật khẩu mới không khớp!")
                                }
                            } else {
                                setErrorMessage("Vui lòng nhập đầy đủ thông tin đi")
                            }
                        }}
                    >
                        <Text style={styles.btn_text}>Lưu mật khẩu</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
export default ChangePassword_Screen;
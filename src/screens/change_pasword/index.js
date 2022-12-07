import React from "react";
import {
    Text,
    View,
    StatusBar,
    SafeAreaView,
    TouchableOpacity,
    TextInput,
    Alert,
    Formik
} from "react-native";
import { useState } from "react";
import styles from "./style";
import Back from "../../../assets/images/header/back.svg";
import colors from "../../../contains/colors";
import EyeIcon from "../../../assets/images/sign_up/eye.svg"
import EyeSlashIcon from "../../../assets/images/sign_up/no-eye.svg"


const ChangePassword_Screen = (props) => {
    const [oldpassword, setOldpass] = useState("");
    const [newpassword, setNewpass] = useState("");
    const [RepeatNewPassword, setRepeatNewpass] = useState("");


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
            <View style={styles.content}>
                <View style={styles.user_info}>
                    <Text style={styles.input_title}>Mật khẩu cũ</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={setOldpass}
                        value={oldpassword}
                    />
                    <Text style={styles.input_title} >Mật khẩu mới</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={setNewpass}
                        value={newpassword}
                    />
                    <Text style={styles.input_title}>Nhập lại mật khẩu mới</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={setRepeatNewpass}
                        value={RepeatNewPassword}
                    />
                </View>
                <TouchableOpacity style={styles.btn} onPress={() => Alert.alert("Luu mat khau")}>
                    <Text style={styles.btn_text}>Lưu mật khẩu</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}
export default ChangePassword_Screen;
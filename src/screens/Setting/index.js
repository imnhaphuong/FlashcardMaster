import React, { useState } from "react";
import {
    Text,
    Image,
    View,
    StatusBar,
    SafeAreaView,
    TouchableOpacity,
    TextInput,
    Switch,
    ScrollView
} from "react-native";
import styles from "./style";
import Back from "../../../assets/images/header/back.svg";
import Tick from "../../../assets/images/header/Tick.svg";
import colors from "../../../contains/colors";
import { useSelector } from "react-redux";
import { updateProfile } from "../../../getdata/updateProfile";
import Toast from "react-native-toast-message";



const Setting_Screen = (props) => {
    const [fullname, setFullname] = useState("");
    const [email, setEmail] = useState("");
    const [errorMessage, setErrorMessage] = useState();
    const [isEnabled, setIsEnabled] = useState(true);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const { user } = useSelector(state => state.user);


    return (
        <SafeAreaView style={styles.container}>
            <StatusBar
                animated={true}
                backgroundColor={colors.white}
                barStyle={"dark-content"}
                showHideTransition={"fade"}
            />
            <View style={styles.header}>
                <Toast ref={(ref) => { Toast.setRef(ref) }} />
                <TouchableOpacity onPress={() => {
                    props.navigation.goBack()
                }}>
                    <Back />
                </TouchableOpacity>
                <Text style={styles.textHeader}>Cài đặt</Text>
                <TouchableOpacity onPress={async () => {
                    const result = await updateProfile(user._id, email, fullname)
                    if (email != user.email) {
                        setErrorMessage("Bạn muốn thay đổi thông tin nào?")
                        //props.navigation.navigate("verify_email")
                    }
                    if (result.status === "SUCCESS") {
                        setErrorMessage(undefined)
                        Toast.show({
                            type: 'success',
                            position: 'top',
                            text1: 'Bạn đã thay đổi thông tin thành công',
                            visibilityTime: 5000,
                            autoHide: true
                        })
                    } else {
                        setErrorMessage("Bạn muốn thay đổi thông tin nào?")
                    }
                    setFullname({fullname:""})
                    setEmail({email:""})
                }}

>
                    <Tick />
                    
                </TouchableOpacity>
            </View>
            <ScrollView>
                {errorMessage && <Text style={{ color: "#DD0000" }}>{errorMessage}</Text>}
                <View style={styles.content}>
                    <View>
                        <Text style={styles.title}>Hồ sơ</Text>
                        <View style={styles.avatar}>
                            <Image
                                style={styles.image}
                                source={{
                                    uri: user.avatar,
                                }} />
                        </View>
                    </View>
                    <View style={styles.user_info} >
                        <Text style={styles.item}>Họ và tên</Text>
                        <TextInput
                            placeholder={user.fullname}
                            style={styles.input}
                            onChangeText={setFullname}
                            value={fullname}></TextInput>
                        <Text style={styles.item}>Email</Text>
                        <TextInput
                            placeholder={user.email}
                            style={styles.input}
                            onChangeText={setEmail}
                            value={email}></TextInput>
                    </View>
                    <View style={styles.notify}>
                        <Text style={styles.title}>Thông báo</Text>
                        <Switch
                            trackColor={{ false: "#767577", true: colors.violet }}
                            thumbColor={isEnabled ? colors.white : "#f4f3f4"}
                            onValueChange={toggleSwitch}
                            value={isEnabled}
                        />
                    </View>
                    <View style={styles.version}>
                        <Text style={styles.title}>Phiên bản</Text>
                        <Text style={styles.version_text}>1.0</Text>
                    </View>
                    <View style={styles.btn_gr}>
                        <TouchableOpacity style={styles.btn} onPress={() => props.navigation.navigate("sign_up")}>
                            <Text style={styles.btn_text}>Đăng xuất</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btn} onPress={() => props.navigation.navigate("ChangePassword_Screen")}>
                            <Text style={styles.btn_text}>Thay đổi mật khẩu</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
export default Setting_Screen;
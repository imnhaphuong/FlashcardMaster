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
    ScrollView,
    Alert
} from "react-native";
import styles from "./style";
import Back from "../../../assets/images/header/back.svg";
import Tick from "../../../assets/images/header/Tick.svg";
import colors from "../../../contains/colors";
import { useDispatch, useSelector } from "react-redux";
import { updateFullname } from "../../../getdata/updateProfile";
import Toast from "react-native-toast-message";
import { setUser } from "../../store/slices/userSlice";



const Setting_Screen = (props) => {
    const dispatch = useDispatch()
    const { user } = useSelector(state => state.user);
    console.log("USER", user);
    const [inputs, setInputs] = useState({
        fullname: '',
        email: ''
    });
    const handleOnChange = (text, input) => {
        setInputs((prevState) => ({ ...prevState, [input]: text }));
    };
    const [errorMessage, setErrorMessage] = useState();
    const [isEnabled, setIsEnabled] = useState(true);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const showAlert = () =>
        Alert.alert(
            "",
            "Bạn cần phải đăng nhập lại từ đầu khi thay đổi email! ",
            [
                {
                    text: "Huỷ",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                {
                    text: "Đồng ý", onPress: () => {
                        props.navigation.navigate("verifyEmailAgain", { userId: user._id, email: inputs.email })
                    }
                }
            ]
        );

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
                    if (inputs.fullname != "") {
                        const newFullname = await updateFullname(user._id, inputs.fullname)
                        if (newFullname && inputs.email === "") {
                            setErrorMessage(undefined)
                            Toast.show({
                                type: 'success',
                                position: 'top',
                                text1: 'Bạn đã thay đổi họ và tên thành công',
                                visibilityTime: 5000,
                                autoHide: true
                            })

                        }
                        if (newFullname && inputs.email != "") {
                            setErrorMessage(undefined)
                            showAlert()
                        }
                        dispatch(setUser({
                            ...user, fullname: newFullname.fullname
                        }))
                    }
                    if (inputs.fullname === "") {
                        if (inputs.email === "") {
                            setErrorMessage("Vui lòng nhập thông tin bạn muốn thay đổi")
                        } else {
                            showAlert()
                        }
                    }
                    setInputs({
                        fullname: '',
                        email: '',
                    })
                }}>
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
                            value={inputs.fullname}
                            onChangeText={(text) => handleOnChange(text, 'fullname')}
                            style={styles.input}>
                        </TextInput>
                        <Text style={styles.item}>Email</Text>
                        <TextInput
                            placeholder={user.email}
                            value={inputs.email}
                            onChangeText={(text) => handleOnChange(text, 'email')}
                            style={styles.input}>
                        </TextInput>
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
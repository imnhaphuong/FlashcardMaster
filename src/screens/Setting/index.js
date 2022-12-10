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
    Alert,
    ScrollView
} from "react-native";
import styles from "./style";
import Back from "../../../assets/images/header/back.svg";
import Tick from "../../../assets/images/header/Tick.svg";
import colors from "../../../contains/colors";

const Setting_Screen = (props) => {
    const [username, setUsername] = useState("");
    const [fullname, setFullname] = useState("");
    const [email, setEmail] = useState("");

    const [isEnabled, setIsEnabled] = useState(true);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);


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
                <Text style={styles.textHeader}>Cài đặt</Text>
                <TouchableOpacity onPress={() => Alert.alert("Save")}>
                    <Tick />
                </TouchableOpacity>
            </View>
            <ScrollView>
                <View style={styles.content}>
                    <View>
                        <Text style={styles.title}>Hồ sơ</Text>
                        <View style={styles.avatar}>
                            <Image
                                style={styles.image}
                                source={{
                                    uri: "https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745",
                                }} />
                        </View>

                    </View>
                    <View style={styles.user_info} >
                        <Text style={styles.item}>Username</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={setUsername}
                            value={username}></TextInput>
                        <Text style={styles.item}>Họ và tên</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={setFullname}
                            value={fullname}></TextInput>
                        <Text style={styles.item}>Email</Text>
                        <TextInput
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
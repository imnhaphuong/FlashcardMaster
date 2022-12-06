import React from "react";
import {
    Text,
    Image,
    View,
    StatusBar,
    ScrollView,
    SafeAreaView,
    FlatList,
    TouchableOpacity,
    SegmentedControlTab,
} from "react-native";
import { useState } from "react";
import styles from "./style";
import Back_green from "../../../assets/images/header/back_green.svg";
import Tick from "../../../assets/images/header/Tick.svg";
import { TextInput } from "react-native-paper";

const ChangePassword_Screen = (props) => {
    const [oldpass, onChangeText] = React.useState("");
    return (
        <SafeAreaView>
            <View>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => {
                        props.navigation.goBack()
                    }}>
                        <Back_green />
                    </TouchableOpacity>
                    <Text style={styles.title}>Đổi mật khẩu</Text>
                </View>
                <View>
                    <Text style={styles.input_title}>Mật khẩu cũ</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeText}
                        value={oldpass}

                    />
                    <Text style={styles.input_title} >Mật khẩu mới</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeText}
                        value={oldpass}

                    />
                    <Text style={styles.input_title}>Nhập lại mật khẩu mới</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeText}
                        value={oldpass}

                    />
                </View>
            </View>

        </SafeAreaView>
    )
}
export default ChangePassword_Screen;
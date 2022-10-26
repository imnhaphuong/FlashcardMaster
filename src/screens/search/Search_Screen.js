import React from "react";
import { Text, TextInput, View, StatusBar, ScrollView, SafeAreaView, placeholder, TouchableOpacity, TouchableWithoutFeedback } from "react-native";
import Back from "../../../assets/images/header/back_green.svg"
import styles from "./styles";
import Search from "../../../assets/images/nab/Search_green.svg";
import Topic from "../../components/Topic";


const Search_Screen = (props) => {
    return (
        <SafeAreaView>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => {
                    props.navigation.goBack()
                }}>
                    <Back />
                </TouchableOpacity>
                <TextInput style={styles.input} placeholder="Tìm Kiếm" placeholderTextColor="#405655">
                </TextInput>
                <Search style={styles.icon} />
            </View>
            <View style={styles.content}>
                <SegmentedControlTab
                values={["Học phần", "Lớp học", "Người dùng"]}
                >
                </SegmentedControlTab>
            </View>
        </SafeAreaView>
    );
}
export default Search_Screen;
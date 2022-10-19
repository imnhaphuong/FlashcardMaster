import React from "react";
import { Text, TextInput, View, StatusBar, ScrollView, SafeAreaView, placeholder, TouchableOpacity, TouchableWithoutFeedback } from "react-native";
import Back from "../../../assets/images/back_green.svg"
import styles from "./styles";
import Search from "../../../assets/images/Search_green.svg";
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
                <View >
                    <TouchableWithoutFeedback activeOpacity={0.6}
                        underlayColor="red"
                        
                        onPress={() => {
                            <Topic/>
                        }}
                        >
                        <Text>Học Phần</Text>
                        
                    </TouchableWithoutFeedback>
                </View>
                <View>
                    <TouchableWithoutFeedback activeOpacity={0.6}
                        underlayColor="#DDDDDD"
                        
                        onPress={() => {
                        }}
                        >
                        <Text>Lớp Học</Text>
                    </TouchableWithoutFeedback>
                </View>
                <View>
                    <TouchableWithoutFeedback activeOpacity={0.6}
                        underlayColor="#DDDDDD"

                        onPress={() => {
                        }}
                        >
                        <Text>Người dùng</Text>
                    </TouchableWithoutFeedback>
                </View>
            </View>


        </SafeAreaView>
    );
}
export default Search_Screen;
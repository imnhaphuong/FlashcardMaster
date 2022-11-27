import { View, Text } from 'react-native'
import React from 'react'
import styles from './style'
import colors from '../../../contains/colors';
import CustomButton from '../../components/CustomButton/CustomButton';

export default function MutipleChoiceScreen() {
    return (
        <View style={styles.testComponent}>

            <View style={{ height: '40%', justifyContent: 'center' }}>
                <View style={{ height: '40%', justifyContent: 'center', paddingVertical: 30 }}>
                    <Text style={styles.textTrueFalse} >
                        Thuật ngữ
                    </Text >
                </View >
            </View>
            <View style={{ height: '60%' }}>
                <CustomButton type="CHANGE_TRUE" text="Đúng" onPress={() =>
                    console.log("đúm")
                } hide="hide" />
                <CustomButton type="CHANGE_TRUE" text="Đúng" onPress={() =>
                    console.log("đúm")
                } hide="hide" />
                <CustomButton type="CHANGE_TRUE" text="Đúng" onPress={() =>
                    console.log("đúm")
                } hide="hide" />
                <CustomButton type="CHANGE_TRUE" text="Đúng" onPress={() =>
                    console.log("đúm")
                } hide="hide" />
            </View >



        </View>
    )
}
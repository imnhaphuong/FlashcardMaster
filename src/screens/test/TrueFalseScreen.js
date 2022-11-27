import { View, Text } from 'react-native'
import React from 'react'
import styles from './style'
import colors from '../../../contains/colors';
import CustomButton from '../../components/CustomButton/CustomButton';

export default function TrueFalseScreen() {
    return (
        <View style={styles.testComponent}>
            
            <View style={{ height: '60%', justifyContent: 'center' }}>
                <View style={{ height: '40%', justifyContent: 'flex-end', paddingVertical: 30 }}>
                    <Text style={styles.textTrueFalse} >
                        Thuật ngữ
                    </Text >
                </View >
                <View style={{ backgroundColor: colors.graySecondary, height: 2 }}></View>
                <View style={{ height: '60%', justifyContent: 'flex-start', paddingVertical: 30 }}>
                    <Text style={styles.textTrueFalse} >
                        Định nghĩa
                    </Text >
                </View >
            </View>
            <View style={{ height: '40%' }}>
                <CustomButton type="CHANGE_TRUE" text="Đúng" onPress={() =>
                    console.log("đúm")
                } hide="hide" />


                <CustomButton type="CHANGE_FALSE" text="Sai" onPress={() =>
                    console.log("sai cmnr")
                } hide="hide" />
            </View >



        </View>
    )
}
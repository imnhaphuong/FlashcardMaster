import { View, Text, Modal, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import colors from '../../../contains/colors'
import fonts from '../../../contains/fonts'


const SysModal = ({ message, visible, onClose, type = "NONE", onPress }) => {

    return (
        <Modal animationType="fade" onRequestClose={onClose} visible={visible} transparent={true}>
            <View style={{
                flex: 1,
                backgroundColor: 'rgba(00,00,00,.5)',
                justifyContent: "center",
                alignItems: "center",
                padding: 20,
            }}>
                <View style={{
                    width: "100%",
                    borderRadius: 10,
                    padding: 20,
                    backgroundColor: "white",

                }}>
                    {/* title */}
                    <View style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginBottom: 20,
                        borderBottomColor:colors.graySecondary,
                        borderBottomWidth: 1,
                    }}>
                        <Text style={{
                            fontSize: 20,
                            color: colors.text,
                            fontFamily:fonts.bold,
                            marginBottom:10,
                        }}>Thông báo</Text>
                    </View>
                    {/* body */}
                    <View>
                               
                        <Text style={{ fontSize: 16, fontFamily:fonts.regular, color: colors.darkGray }}>{message}</Text>
                    </View>
                    {/* button */}
                    <View style={styles[`${type}`]}>
                        <TouchableOpacity activeOpacity={0.5} style={{
                            alignItems: 'center',
                            justifyContent: "center",
                            paddingLeft: 15,
                            paddingRight: 15,
                            marginHorizontal: 10,
                            width: 90,
                            height: 45,
                            borderRadius: 10,
                            backgroundColor: colors.pink,
                        }}>

                            <Text style={{
                                fontSize: 14,
                                fontFamily:fonts.regular,
                                color: colors.white,
                            }} onPress={onPress}>
                                Đồng ý
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.5} style={{
                            alignItems: 'center',
                            justifyContent: "center",
                            paddingLeft: 15,
                            paddingRight: 15,
                            marginHorizontal: 10,
                            width: 90,
                            height: 45,
                            borderRadius: 10,
                            backgroundColor: colors.violet,
                        }} >
                            <Text style={{
                                fontSize: 14,
                                fontFamily:fonts.regular,
                                color: colors.white,
                            }} onPress={onClose}>
                                Thoát
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    )
}
const styles = StyleSheet.create({
    OPTION: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 40,
        flexDirection: "row",
    },
    NONE: {
        display: "none",
    }

})
export default SysModal;

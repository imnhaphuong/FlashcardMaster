import { View, Text, Modal, TouchableOpacity } from 'react-native'
import React,{useState} from 'react'
import colors from '../../../contains/colors'
import { LinearGradient } from 'react-native-svg'

const SysModal = ({message,visible,onClose}) => {
    return (
        <Modal visible={visible} transparent={true}>
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
                    }}>
                        <Text style={{
                            fontSize: 20,
                            color: colors.text,
                            fontWeight: 'bold',
                        }}>Thông báo</Text>
                    </View>
                    {/* body */}
                    <View>
                        <Text style={{fontSize: 16, color: colors.darkGray}}>{message}</Text>
                    </View>
                    {/* button */}
                    <View style={{
                        justifyContent: "center",
                        alignItems: "center",
                        marginTop: 20,
                    }}>
                        <TouchableOpacity >
                            <View style={{
                                alignItems: 'center',
                                justifyContent: "center",
                                paddingLeft: 15,
                                paddingRight: 15,
                                width: "100%",
                                height: 40,
                                borderRadius: 10,
                                backgroundColor:colors.violet,
                            }}
                            >
                                <Text style={{
                                    fontSize: 16,
                                    // fontWeight: 'bold',
                                    color: colors.white,
                                }} onPress={onClose}>
                                    Close
                                </Text>

                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

export default SysModal;

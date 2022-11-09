import { View, Image, Text, Modal, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import colors from '../../../contains/colors'
import Personal from '../../../assets/images/sign_up/personal.svg';
import Class from '../../../assets/images/sign_up/class.svg';

const ModalOption = ({ visible, chooseClass,choosePersonal }) => {

    return (
        <Modal animationType="fade"  visible={visible} transparent={true}>
            <View style={{
                flex: 1,
                backgroundColor: 'rgba(00,00,00,.5)',
                // justifyContent: "center",
                alignItems: "center",
                position: "relative",
            }}>
                <View style={{
                    width: "100%",
                    height: 320,
                    borderRadius: 20,
                    padding: 20,
                    backgroundColor: colors.violet,
                    position: "absolute",
                    bottom: 0,
                    padding: 20,

                }}>
                    {/* title */}
                    <View style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginVertical: 15,
                    }}>
                        <Text style={{
                            fontSize: 20,
                            color: colors.white,
                            fontWeight: '400',
                            lineHeight: 24,
                            letterSpacing: 0.2,
                        }}>Bạn sử dụng Flashcard Master</Text>
                    </View>
                    {/* body */}

                    {/* button */}
                    <View style={{
                        // justifyContent: "center",
                        // alignItems: "center",
                        marginTop: 20,
                    }}>
                        <TouchableOpacity onPress={chooseClass}>
                            <View style={{
                                flexDirection: "row",
                                alignItems: 'center',
                                // justifyContent: "center",
                                marginHorizontal: 5,
                                height: 80,
                                borderRadius: 10,
                                backgroundColor: colors.pink,
                            }}
                            >
                                <Class style={{
                                    width: 68,
                                    height: 68,
                                    borderRadius: 5,
                                    left: 50,
                                }} />
                                <Text style={{
                                    fontSize: 20,
                                    fontWeight: '500',
                                    letterSpacing: 0.2,
                                    lineHeight: 24,
                                    color: colors.text,
                                    marginLeft: 100,
                                }} >
                                    Cho lớp học
                                </Text>

                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={choosePersonal}>
                            <View style={{
                                flexDirection: "row",
                                alignItems: 'center',
                                marginTop: 10,
                                marginHorizontal: 5,
                                height: 80,
                                borderRadius: 10,
                                backgroundColor: colors.yellow,
                            }}
                            >
                                <Personal style={{
                                    width: 68,
                                    height: 68,
                                    borderRadius: 5,
                                    left: 50,
                                }} />
                                <Text style={{
                                    fontSize: 20,
                                    fontWeight: '500',
                                    letterSpacing: 0.2,
                                    lineHeight: 24,
                                    color: colors.text,
                                    marginLeft: 100,
                                }} >
                                    Cho cá nhân
                                </Text>

                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

export default ModalOption;

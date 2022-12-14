import { View, Text, Modal, StyleSheet, TouchableOpacity } from 'react-native'
import colors from '../../../contains/colors'
import fonts from '../../../contains/fonts'
import InCorrect from '../../../assets/images/checkbox/Incorrect.svg'
const ModalAnswer = ({ question, visible, onClose, answer, correct }) => {

    return (
        <Modal animationType="fade" onRequestClose={onClose} visible={visible} >
            <View style={{
                flex: 1,
                backgroundColor: 'rgba(0,0,0,0.5)',
                justifyContent: "center",
                alignItems: "center",
                padding: 20,

            }}>
                <View style={{
                    width: "100%",
                    
                    borderRadius: 10,
                    paddingBottom: 0,
                    backgroundColor: "white",
                }}>
                    {/* title */}
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        borderTopLeftRadius: 10,
                        borderTopRightRadius: 10,
                        height: "20%",
                        paddingHorizontal: 10,
                        backgroundColor: colors.highlight,
                    }}>
                        <InCorrect />
                        <Text style={{
                            fontSize: 22,
                            color: colors.white,
                            fontFamily: fonts.semibold,
                            marginLeft: 20,
                        }}>
                            Sai rồi!
                        </Text>
                    </View>
                    {/* body */}
                    {correct !== "" ?
                        <View style={{ paddingHorizontal: 20, backgroundColor: colors.white, }}>
                            <Text style={{ marginVertical: 10, fontSize: 20, fontFamily: fonts.regular, color: colors.darkGray }}>{question}</Text>
                            <View style={{
                                borderBottomColor: colors.graySecondary,
                                borderBottomWidth: 1,
                            }}>
                                <Text style={{ marginTop: 10, fontSize: 18, fontFamily: fonts.regular, color: colors.success, textTransform: "uppercase" }}>Đáp án đúng:</Text>
                                <Text style={{ fontSize: 18, fontFamily: fonts.regular, color: colors.darkGray, marginVertical: 10 }}>{correct}</Text>
                            </View>
                            <View >
                                <Text style={{ marginTop: 10, fontSize: 18, fontFamily: fonts.regular, color: colors.highlight, textTransform: "uppercase" }}>Câu trả lời của bạn:</Text>
                                <Text style={{ marginTop: 10, fontSize: 18, fontFamily: fonts.regular, color: colors.darkGray }}>{answer}</Text>
                            </View>

                        </View>
                        : ""}
                    {/* button */}
                    {correct !== "" ?
                        <View style={{
                            justifyContent: "center",
                            alignItems: "center",
                            marginTop: 40,
                        }}>
                            <TouchableOpacity activeOpacity={0.5} style={{
                                alignItems: 'center',
                                justifyContent: "center",
                                width: "100%",
                                backgroundColor: colors.white,
                            }} >
                                <Text style={{
                                    fontSize: 18,
                                    fontFamily: fonts.semibold,
                                    color: colors.violet,
                                }} onPress={onClose}>
                                    Tiếp tục
                                </Text>
                            </TouchableOpacity>
                        </View> : ""
                    }

                </View>
            </View>
        </Modal>
    )
}
export default ModalAnswer;

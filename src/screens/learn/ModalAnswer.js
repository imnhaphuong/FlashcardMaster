import { View, Text, Modal, StyleSheet, TouchableOpacity } from 'react-native'
import colors from '../../../contains/colors'
import fonts from '../../../contains/fonts'
import Correct from '../../../assets/images/checkbox/Correct.svg'
const ModalAnswer = ({ message, visible, onClose, type = "NONE" }) => {

    return (
        <Modal animationType="fade" onRequestClose={onClose} visible={visible} >
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
                    paddingBottom: 0,
                    backgroundColor: "white",
                }}>
                    {/* title */}
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        height: "15%",
                        backgroundColor: colors.success,
                    }}>
                        <Correct />
                        <Text style={{
                            fontSize: 20,
                            color: colors.white,
                            fontFamily: fonts.semibold,
                            marginLeft: 20,
                        }}>
                            Đúng rồi
                        </Text>
                    </View>
                    {/* body */}
                    <View style={{ backgroundColor: colors.white, }}>
                        <Text style={{ marginVertical: 10, fontSize: 18, fontFamily: fonts.regular, color: colors.darkGray }}>Questions</Text>
                        <View style={{
                            borderBottomColor: colors.graySecondary,
                            borderBottomWidth: 1,
                        }}>
                            <Text style={{ marginTop: 10, fontSize: 16, fontFamily: fonts.regular, color: colors.success, textTransform: "uppercase" }}>Đáp án đúng:</Text>
                            <Text style={{ fontSize: 16, fontFamily: fonts.regular, color: colors.darkGray, marginVertical: 10 }}>câu trả lời đúng</Text>
                        </View>
                        <View >
                            <Text style={{ marginTop: 10, fontSize: 16, fontFamily: fonts.regular, color: colors.highlight, textTransform: "uppercase" }}>Câu trả lời của bạn:</Text>
                            <Text style={{ marginTop: 10, fontSize: 16, fontFamily: fonts.regular, color: colors.darkGray }}>câu trả lời sai</Text>
                        </View>

                    </View>
                    {/* button */}
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
                    </View>
                </View>
            </View>
        </Modal>
    )
}
export default ModalAnswer;

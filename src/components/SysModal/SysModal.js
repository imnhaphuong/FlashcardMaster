import { View, Text, Modal} from 'react-native'
import React from 'react'
import colors from '../../../contains/colors'


const SysModal = ({ message, visible, onClose }) => {
    
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
                    }}>
                        <Text style={{
                            fontSize: 20,
                            color: colors.text,
                            fontWeight: 'bold',
                        }}>Thông báo</Text>
                    </View>
                    {/* body */}
                    <View>
                        <Text style={{ fontSize: 16, color: colors.darkGray }}>{message}</Text>
                    </View>
                    {/* button */}
                    <View style={{
                        justifyContent: "center",
                        alignItems: "center",
                        marginTop: 20,
                    }}>
                        
                    </View>
                </View>
            </View>
        </Modal>
    )
}

export default SysModal;

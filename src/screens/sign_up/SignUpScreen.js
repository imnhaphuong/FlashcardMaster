import { View, Text, Image, StatusBar, TextInput, TouchableOpacity, SafeAreaView, KeyboardAvoidingView, Platform } from 'react-native'
import React from 'react'
import styles from './style'
import colors from '../../../contains/colors'
// import {VectorTop} from '../../../assets/images/vector-top.svg'


if (Platform.OS === 'android') {
  const hasNotch = StatusBar.currentHeight > 24;
}
export default SignUpScreen = () => {
  return (
    // <View style={{ flex: 1 }}>
    //   <View style={styles.container}>
    //   {/* <StatusBar
    //       backgroundColor="transparent"
    //       translucent={true}
    //     /> */}
    //     {/* imgBackground */}
    //     <View style={{ flex: 1, flexDirection: 'row' }}>

    //       <View style={{ flex: 1 }}>
    //         {/* <Image style={styles.vectorTop} source={require('../../../assets/images/vector-top.png')} /> */}
    //         {/* <VectorTop/> */}
    //       </View>
    //       {/* Title */}
    //       <View style={{ flex: 2, right: 100, top: 150, marginBottom: 50, }}>
    //         <Text style={styles.title}>Tạo tài khoản</Text>
    //         <View style={{ flexDirection: 'row' }}>
    //           <Text style={styles.subTitle}>Chào mừng bạn đến với
    //           </Text>
    //           <Text style={[styles.subTitle, styles.subTitleColor]}>
    //             Flashcard Master</Text>
    //         </View>
    //       </View>
    //     </View>

    //     {/* Form */}

    //     <View style={{ flex: 2, flexDirection: 'column', marginHorizontal: 20, }}>
    //       {/* FormText */}
    //       <View style={{ flex: 2, }}>
    //         <KeyboardAvoidingView keyboardVerticalOffset={10} behavior={Platform.OS === "ios" ? "padding" : "height"} >

    //           <View >
    //             <TextInput style={styles.textInput}
    //               placeholder="Gmail"
    //               keyboardType="email-address"
    //             />
    //           </View>
    //           <View >
    //             <TextInput style={styles.textInput}
    //               placeholder="Password"
    //               keyboardType="password"
    //               secureTextEntry={true}
    //             />
    //           </View>
    //           <View >
    //             <TextInput style={styles.textInput}
    //               placeholder="Re-Password"
    //               keyboardType="password"
    //               secureTextEntry={true}
    //             />
    //           </View>
    //         </KeyboardAvoidingView>
    //       </View>
    //       {/* BottomForm */}
    //       <View style={{ flex: 1 }}>
    //         <TouchableOpacity style={styles.btnDangKy}>
    //           <View >
    //             <Text style={styles.btnText}>Đăng ký</Text>
    //           </View>
    //         </TouchableOpacity>
    //         <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
    //           <Text style={styles.btnText}>Bạn đã có tài khoản?</Text>
    //           <TouchableOpacity>
    //             <Text style={{
    //               fontWeight: '500',
    //               fontSize: 16,
    //               lineHeight: 24,
    //               letterSpacing: 0.2,
    //               color: colors.secondary,
    //               marginLeft: 5,
    //             }}>
    //               Đăng nhập
    //             </Text>
    //           </TouchableOpacity>
    //         </View>
    //         <View style={{ flex: 1 }}>
    //           <TouchableOpacity>
    //             <View style={{
    //               flexDirection: 'row',
    //               backgroundColor: colors.primary,
    //               width: 335,
    //               height: 48,
    //               alignItems: "center",
    //               justifyContent: "center",
    //               borderWidth: 2,
    //               borderColor: colors.primary,
    //               borderRadius: 10,
    //             }}>
    //               <View style={{}}>
    //                 <Image source={require('../../../assets/images/_Google.png')} />
    //               </View>
    //               <View style={{ marginLeft: 5 }}>
    //                 <Text style={{ color: 'white', fontSize: 16, fontWeight: '500', lineHeight: 24, letterSpacing: 0.2 }}>Đăng ký bằng Google</Text>
    //               </View>

    //             </View>
    //           </TouchableOpacity>
    //         </View>

    //       </View>
    //     </View>
    //     {/* imgBottom */}
    //     <View style={{ flex: 1, bottom: 50, width: 418, height: 400 }}>
    //       <Image style={styles.vectorBot} source={require('../../../assets/images/vector-bot.png')} />
    //     </View>
    //   </View >
    // </View>
    <View>
      <Text>Hello</Text>
    </View>
  )
}


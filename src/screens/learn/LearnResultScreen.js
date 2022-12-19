import { View, Text, SafeAreaView, StatusBar, StyleSheet, KeyboardAvoidingView, TouchableOpacity, ScrollView, FlatList } from 'react-native'
import React, { useState, useEffect } from "react";
import colors from "../../../contains/colors";
import Back from "../../../assets/images/header/back.svg";
import fonts from '../../../contains/fonts';
import { useDispatch, useSelector } from 'react-redux'
import { ProgressBar, MD3Colors } from 'react-native-paper';
import CustomFlipCard from "../../components/CustomFlipCard";
import SimpleCard from "../../components/SimpleCard";

export default function LearnResultScreen(props) {
    // const Questions = useSelector((state) => state.questReducer)
    // const {user} = useSelector((state) => state.user)
    // const trueAnswer = Questions.questionsTrue;
    // const falseAnswer = Questions.questionsFalse;
    const dispatch = useDispatch();
    const fcard = useSelector((state) => state.fcardReducer).fcards
    console.log("fcardReducer", fcard);
    var params = props.route.params;
    const flashcards = params.flashcards;
    const round = params.round;
    const [progress, setProgress] = useState(2);
    
    useEffect(() => {
        setProgress(flashcards.length / fcard.length);
        if (round !== 1) {
            setProgress(1);
        }
    }, [])
    const continueRound = () => {
        const fcard2 = fcard.slice(Math.floor(fcard.length / 2), fcard.length + 1);
        console.log("fcard2", fcard2);
        props.navigation.replace("learn", {
            round: round + 1, flashcards: fcard2
        })
    }

    // const coin = trueAnswer.length * 5;
    const onBack = () => {
        // props.navigation.replace("unit_detail", {
        //     id: useSelector((state) => state.fcardReducer)._id,
        // })
        props.navigation.goBack()
    }
    // const Questiondsa = useSelector((state) => state.questReducer)
    return (
        <SafeAreaView style={{ backgroundColor: colors.pastelPurple }}>
            <StatusBar
                animated={true}
                backgroundColor={colors.white}
                barStyle={"dark-content"}
                showHideTransition={"fade"}
            />
            {/* Header */}
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={styles.header}
            >
                <TouchableOpacity
                    onPress={() => onBack()}
                >
                    <Back />
                </TouchableOpacity>
                <View style={{ width: "90%", }}>
                    <Text style={styles.textHeader}>Vòng {round}</Text>
                </View>
            </KeyboardAvoidingView>
            <View style={{ height: '100%', }}>
                <View style={{ height: '30%', backgroundColor: colors.pastelPurple, paddingHorizontal: 20, paddingVertical: 20 }}>
                    <Text style={{ fontSize: 30, fontFamily: 'WorkSans-SemiBold', color: colors.text }}>{round === 1 ? "Bạn đã hoàn thành rất tốt, hãy tiếp tục nào" : "Bạn đã hoàn thành học hết học phần"} </Text>
                    <View >
                        <Text style={{ fontSize: 20, fontFamily: fonts.regular, marginVertical: 10 }}>Vòng {round} đã hoàn thành</Text>
                        <Text style={{
                            fontSize: 16,
                            fontFamily: fonts.regular,
                            color: colors.text,
                            marginVertical: 5
                        }}>{round === 1 ? flashcards.length + "/" + fcard.length : fcard.length + "/" + fcard.length}</Text>
                        <View style={{ marginTop: 10 }}>
                            <ProgressBar color={colors.violet}
                                progress={progress}
                                borderWidth={3}
                                borderColor={colors.graySecondary}
                                unfilledColor={'white'}
                                height={10}
                                borderRadius={7.5} />
                        </View>

                    </View>
                    <View style={{
                        justifyContent: "center",
                        alignItems: "center",
                        marginVertical: 15,
                    }}>
                        {
                            round === 1 ? <TouchableOpacity activeOpacity={0.5} style={{
                                alignItems: 'center',
                                justifyContent: "center",
                            }} onPress={() => continueRound()}>
                                <Text style={{
                                    fontSize: 18,
                                    fontFamily: fonts.semibold,
                                    color: colors.violet,
                                    textDecorationLine: "underline",
                                }}>
                                    Tiếp tục vòng 2
                                </Text>
                            </TouchableOpacity>
                                : <TouchableOpacity activeOpacity={0.5} style={{
                                    alignItems: 'center',
                                    justifyContent: "center",
                                }} onPress={() => onBack()}>
                                    <Text style={{
                                        fontSize: 18,
                                        fontFamily: fonts.semibold,
                                        color: colors.violet,
                                        textDecorationLine: "underline",
                                    }}>
                                        Kết thúc
                                    </Text>
                                </TouchableOpacity>
                        }
                    </View>

                </View>

                <ScrollView style={{ flex: 1, paddingHorizontal: 20, height: '70%', paddingVertical: 10, }} >
                    <View style={{ height: '100%', paddingBottom: 150 }}>
                        <Text style={{ fontSize: 20, fontFamily: 'WorkSans-SemiBold', marginVertical: 10 }}>Thẻ đã học được</Text>
                        {/* Flip Cards */}
                        <FlatList
                            showsHorizontalScrollIndicator={false}
                            data={round === 1 ? flashcards : fcard}
                            renderItem={(e) => {
                                return (
                                    <SimpleCard
                                        term={e.item.term}
                                        define={e.item.define}
                                        example={e.item.example}
                                        image={e.item.image}
                                    />
                                );
                            }}
                            numColumns={1}
                            keyExtractor={(item) => {
                                return item._id;
                            }}
                        />
                    </View>
                </ScrollView>


            </View>
        </SafeAreaView>
    )
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.pastelPurple,
        flexDirection: "column",
    },
    header: {
        flexDirection: "row",
        height: 64,
        backgroundColor: colors.white,
        shadowColor: colors.text,
        paddingHorizontal: 20,
        alignItems: "center",
        justifyContent: "center",
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 1 },
        elevation: 2,
        zIndex: 10,
    },
    textTrueFalse: {
        fontSize: 12,
        fontFamily: fonts.regular,
        color: colors.text,
    },
    textHeader: {
        textAlign: "center",
        fontSize: 23,
        color: colors.text,
        fontFamily: 'WorkSans-SemiBold',
    },
    testType: {

    },
    textTrueFalse: {
        fontSize: 22,
        fontFamily: 'WorkSans-SemiBold',
        color: colors.text,
    },
    testComponent: {
        flexDirection: 'column',
        paddingHorizontal: 20,
    }

});


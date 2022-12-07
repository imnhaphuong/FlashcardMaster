import { View, Text } from 'react-native'
import React from 'react'
import colors from "../../../contains/colors";
import fonts from '../../../contains/fonts';
import Correct from "../../../assets/images/checkbox/Correct.svg";
import Incorrect from "../../../assets/images/checkbox/Incorrect.svg";
import { useEffect } from 'react';

export default function TestResult(props) {
    const quest = props.item
    useEffect(() => {
        if (quest.correct === true) {
            quest.correct = "Đúng"
        } else if (quest.correct === false) {
            quest.correct = "Sai"
        }
        if (quest.answer === true) {
            quest.answer = "Đúng"
        } else if (quest.answer === false) {
            quest.answer = "Sai"
        }
    }, [quest])



    return (
        <View style={{ backgroundColor: colors.white, height: 250, width: '100%', padding: 10, marginVertical: 10 }}>
            <View style={{ height: '15%', borderBottomColor: colors.graySecondary, borderBottomWidth: 1 }}>
                <Text style={{ color: colors.violet, fontSize: 16, fontFamily: fonts.semibold, paddingBottom: 3 }}>
                    {quest.index}/ Thuật ngữ: {quest.question}
                </Text>
            </View>
            {
                quest.typeQuestion === 0 ? <View style={{ height: '15%', marginTop: 8 }}>
                    <Text style={{ color: colors.darkGray, fontSize: 16, fontFamily: fonts.semibold, paddingBottom: 8 }}>
                        {quest.define}
                    </Text>
                </View> : ""
            }
            <View style={{ height: '45%', marginTop: 8, flexDirection: 'row', justifyContent: 'space-around', }}>
                <View style={{ width: '50%', backgroundColor: colors.success, alignItems: 'center', justifyContent: 'center' }}>
                    {quest.typeQuestion === 0 && quest.correct === "Sai" ? <Text style={{ color: colors.white, fontSize: 16, fontFamily: fonts.regular, marginTop: 2 }}>{quest.question}: {(quest.defineQuest)}</Text> : ""}
                    <Correct />
                    <Text style={{ color: colors.white, fontSize: 16, fontFamily: fonts.regular, marginTop: 2 }}>{(quest.correct)}</Text>


                </View>
                {
                    quest.answer !== quest.correct ? <View style={{ width: '50%', backgroundColor: colors.highlight, alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ color: colors.white, fontSize: 16, fontFamily: fonts.regular }}>Đáp án bạn đã chọn</Text>
                        <Incorrect />
                        <Text style={{ color: colors.white, fontSize: 16, fontFamily: fonts.regular, marginTop: 2 }}>{String(quest.answer)}</Text>
                    </View> : ""
                }
                {/* <View style={{ width: '50%', backgroundColor: 'green', alignItems: 'center' }}>
                    <Incorrect />
                    <Text style={{ color: colors.highlight, fontSize: 16, fontFamily: fonts.regular, marginTop: 2 }}>dasdsadasd</Text>
                </View> */}
            </View>

            <View style={{ height: '15%', marginTop: 8, backgroundColor: quest.correct === quest.answer ? colors.success : colors.highlight, flexDirection: 'row', alignItems: 'center' }}>
                {/* <Correct width="30" height="30" /> */}
                <Text style={{ color: colors.white, fontSize: 16, fontFamily: fonts.semibold, paddingHorizontal: 5 }}>
                    {quest.correct === quest.answer ? "Đúng rồi!" : "Sai rồi!"}
                </Text>
            </View>
        </View>
    )
}
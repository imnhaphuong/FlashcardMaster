import React from "react";
import styles from "./style";
import { View, Text, TouchableOpacity, FlatList, ScrollView, SafeAreaView, StatusBar } from "react-native";
import Back from "../../../assets/images/header/back.svg";
import UnitCard from "../../components/UnitCard";
import colors from "../../../contains/colors";

const TopicReadMore = (props) => {
    const UNIT = props.units;
    const myRenderUnitItem = ({ item }) => (
        <UnitCard
            unit={item}
        />
    )
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar
                animated={true}
                backgroundColor={colors.white}
                barStyle={"dark-content"}
                showHideTransition={"fade"}
            />
            <View style={styles.header}>
                <TouchableOpacity onPress={() => {
                    props.navigation.goBack()
                }}>
                    <Back />
                </TouchableOpacity>
                <Text style={styles.textHeader}>{props.route.params.name}</Text>
            </View>
            <ScrollView>
                <View style={styles.wrapUnits}>
                    <FlatList
                        data={UNIT}
                        renderItem={myRenderUnitItem}
                        numColumns={2}
                        keyExtractor={(item) => item.id}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
export default TopicReadMore;
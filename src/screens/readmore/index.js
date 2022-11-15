import React from "react";
import styles from "./style";
import { View, Text, TouchableOpacity, FlatList, ScrollView, SafeAreaView } from "react-native";
import Back from "../../../assets/images/header/back_green.svg";
import UnitCard from "../../components/UnitCard";

const TopicReadMore = (props) => {
    const UNIT = props.units;
    console.log("Unit");

    const myRenderUnitItem = ({ item }) => (
        <UnitCard
            unit_name={item.unitName}
            username={item.username}
            number_of_cards={item.number_of_cards}
        />
    )
    return (
        <SafeAreaView>
            <View style={styles.title}>
                <TouchableOpacity onPress={() => {
                    props.navigation.goBack()
                }}>
                    <Back />
                </TouchableOpacity>
                <Text style={styles.name}>{props.route.params.name}</Text>
            </View>
            <ScrollView>
                <View>
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
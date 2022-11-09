import React from "react";
import { Text, TextInput, View, SafeAreaView, TouchableOpacity } from "react-native";
import Back from "../../../assets/images/back_green.svg"
import styles from "./styles";
import Search from "../../../assets/images/Search_green.svg";
import UnitCard from "../../components/UnitCard";
//import SwitchSelector from "react-native-switch-selector";
import colors from "../../../contains/colors";
import SegmentedControlTab from "react-native-segmented-control-tab";
import { useState } from "react";
import { FlatList } from "react-native";



const Search_Screen = (props) => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const handleIndexChange = (index) => {
        //handle tab selection for custom Tab Selection SegmentedControlTab
        setSelectedIndex(index);
    };

    const [units, setUnits] = useState([]);
    const renderUnitItem = ({ item }) => (
        <UnitCard
            id={item._id}
            unit_name={item.unitName}
            username={creator.fullname}
            number_of_cards={
                typeof item.flashcards !== "undefined" ? item.flashcards.length : 0
            }
            navigation={props.navigation}
        />
    );
    return (

        <SafeAreaView>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => {
                    props.navigation.goBack()
                }}>
                    <Back />
                </TouchableOpacity>
                <TextInput style={styles.input} placeholder="Tìm Kiếm" placeholderTextColor="#405655">
                </TextInput>
                <Search style={styles.icon} />
            </View>
            <View>
                <SegmentedControlTab
                    values={[
                        `Học phần`,
                        `Lớp học`,
                        `Người dùng`,
                    ]}
                    selectedIndex={selectedIndex}
                    onTabPress={handleIndexChange}
                    tabsContainerStyle={{
                        height: 60,
                        backgroundColor: colors.pastelPurple,
                    }}
                    tabStyle={{
                        backgroundColor: colors.pastelPurple,
                        borderColor: "transparent",
                        borderBottomColor: colors.graySecondary,
                        borderWidth: 1,
                    }}
                    activeTabStyle={{
                        backgroundColor: "#deddfa",
                        borderBottomColor: colors.violet,
                        borderWidth: 2,
                    }}
                    tabTextStyle={{ color: colors.graySecondary, fontWeight: "bold" }}
                    activeTabTextStyle={{ color: colors.violet }}
                />
                {selectedIndex === 0 && (
                    <View style={styles.wrapUnits}>
                        <FlatList
                            data={units}
                            renderItem={renderUnitItem}
                            numColumns={2}
                            keyExtractor={(item) => item.id}
                        />
                    </View>
                )}
            </View>

        </SafeAreaView>
    );
}
export default Search_Screen;
import React from "react";
import {Text, TextInput, View, ScrollView, SafeAreaView, FlatList, TouchableOpacity } from "react-native";
import UnitCard from "../../components/UnitCard";
import ClassCard from "../../components/ClassCard";
import UserCard_Search from "../../components/UserCard_Search";
import Back from "../../../assets/images/header/back_green.svg";
import styles from "./styles";
import getDataInSearch from "../../../getdata/getDataInSearch";
import { useState } from "react";
import SegmentedControlTab from "react-native-segmented-control-tab";
import colors from "../../../contains/colors";
import Search from "../../../assets/images/nab/Search_green.svg";


const Search_Screen = (props) => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [keyword, setKeyword] = useState("");

    const handleIndexChange = (index) => {
        setSelectedIndex(index);
    };

    const [units, setUnits] = useState([]);
    getDataInSearch(setUnits, selectedIndex, keyword);

    const [classes, setClasses] = useState([]);
    getDataInSearch(setClasses, selectedIndex, keyword);

    const [users, setUsers] = useState([]);
    getDataInSearch(setUsers, selectedIndex, keyword);

    const renderUnitItem = ({ item }) => (
        <UnitCard
            id={item._id}
            unit_name={item.unitName}
            username={creator.fullname}
            number_of_cards={
                typeof item.flashcards !== "undefined" ? item.flashcards.length : 0
            }
            //navigation={props.navigation}
        />
    );

    const renderClassItem = ({ item }) => (
        <ClassCard
            name={item.name}
            number_of_members={
                typeof item.members !== "undefined" ? item.members.length : 0
            }
            //navigation={props.navigation}
        />
    );

    const renderUserItem = (item) => (
        <UserCard_Search
            id={item._id}
            fullname={item.fullname}
            // number_of_class={
            //     typeof item.
            // }
            //navigation={props.navigation}
        />
    );
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => {
                    props.navigation.goBack()
                }}>
                    <Back />
                </TouchableOpacity>
                <TextInput
                    style={styles.input}
                    placeholder="Tìm Kiếm"
                    placeholderTextColor="#405655"
                    onChangeText={setKeyword}
                    value={keyword}>
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
                <ScrollView>
                    {selectedIndex === 0 && (
                        <View style={styles.wrapUnits}>
                            <Text>Units</Text>
                            <Text>{keyword}</Text>
                            <FlatList
                                data={units}
                                renderItem={renderUnitItem}
                                numColumns={2}
                                keyExtractor={(item) => item.id}
                            />
                            
                        </View>
                    )}
                    {selectedIndex === 1 && (
                        <View style={styles.wrapClasses}>
                            <Text>Class</Text>
                            <Text>{keyword}</Text>
                            <FlatList
                                data={classes}
                                renderItem={renderClassItem}
                                numColumns={1}
                                keyExtractor={(item) => item.id}
                            />
                        </View>
                    )}
                    {selectedIndex === 2 && (
                        <View style={styles.wrapUsers}>
                            <Text>User</Text>
                            <Text>{keyword}</Text>
                            <FlatList
                                data={users}
                                renderItem={renderUserItem}
                                numColumns={1}
                                keyExtractor={(item) => item.id}
                            />
                        </View>
                    )}
                </ScrollView>
            </View>
        </SafeAreaView>
    );
}
export default Search_Screen;
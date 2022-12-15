import React from "react";
import { Text, TextInput, View, ScrollView, SafeAreaView, FlatList, TouchableOpacity } from "react-native";
import UnitCard from "../../components/UnitCard";
import ClassCard from "../../components/ClassCard";
import UserCard_Search from "../../components/UserCard_Search";
import Back from "../../../assets/images/header/back_green.svg";
import styles from "./styles";
import { getUsersSearch, getClassesSearch, getUnitsSearch } from "../../../getdata/getDataInSearch";
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
    const [classes, setClasses] = useState([]);
    const [users, setUsers] = useState([]);
    const renderUnitItem = ({ item }) => (
        <UnitCard
            unit={item}
        />
    );

    const renderClassItem = ({ item }) => (
        <ClassCard
            classData={item}
        />
    );

    const renderUserItem = (item) => (
        <UserCard_Search
            user={item.item}
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
                    onChangeText={async (text) => {
                        setKeyword(text)
                        if (text != "") {
                            const UNITS = await getUnitsSearch(text)
                            const CLASSES = await getClassesSearch(text)
                            const USER = await getUsersSearch(text)
                            setUnits(UNITS)
                            setClasses(CLASSES)
                            setUsers(USER)
                        }
                    }}
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
                            <FlatList
                                data={classes}
                                renderItem={renderClassItem}
                                numColumns={1}
                                keyExtractor={(item) => item.id}
                            />
                        </View>
                    )}
                    {selectedIndex === 2 && (
                        <View style={styles.wrapClasses}>
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
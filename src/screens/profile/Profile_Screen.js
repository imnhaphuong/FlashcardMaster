import React from "react";
import {
    Text,
    Image,
    View,
    StatusBar,
    ScrollView,
    SafeAreaView,
    FlatList,
    TouchableOpacity,
    SegmentedControlTab,
} from "react-native";
import { useState } from "react";
import getProfile from "../../../getdata/getProfile";
import ArmorialCard from "../../components/Armorial";
import colors from "../../../contains/colors";
import styles from "./style";
import UnitCard from "../../components/UnitCard";
import ClassCard from "../../components/ClassCard";
import Setting from "../../../assets/images/header/setting.svg";

const Profile_Screen = (props) => {
    const [selectedIndex, setSelectedIndex] = useState(0);

    const handleIndexChange = (index) => {
        setSelectedIndex(index);
    };

    const [units, setUnits] = useState([]);
    getProfile(setUnits, selectedIndex);

    const [classes, setClasses] = useState([]);
    getProfile(setClasses, selectedIndex);

    // const [users, setUsers] = useState([]);
    // getProfile(setUsers, selectedIndex);

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

    const renderClassItem = ({ item }) => (
        <ClassCard
            name={item.name}
            number_of_members={
                typeof item.members !== "undefined" ? item.members.length : 0
            }
            navigation={props.navigation}
        />
    );

    // const renderArmorialItem = (item) => (
    //     <ArmorialCard
    //         name={item.name}
    //     />
    // );
    return (
        <SafeAreaView>
            <View>
                <View style={styles.header}>
                    <Text style={styles.title}>Hồ Sơ</Text>
                    <View>
                        <TouchableOpacity onPress={() => props.navigation.navigate("Setting")}>
                            <Setting style={styles.setting} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View>
                {/* <SegmentedControlTab
                    values={[
                        "Học phần",
                        "Lớp học",
                        "Huy hiệu",
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
                    activeTabTextStyle={{ color: colors.violet }}>
                </SegmentedControlTab> */}
            </View>
            <ScrollView>
                {selectedIndex === 0 && (
                    <View style={styles.wrapUnits}>
                        <Text>Units</Text>
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
                        <Text>Classes</Text>
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
                        <Text>Huy Hieu</Text>
                        {/* <FlatList
                            data={users}
                            renderItem={renderArmorialItem}
                            numColumns={1}
                            keyExtractor={(item) => item.id}
                        /> */}
                    </View>
                )}
            </ScrollView>
        </SafeAreaView >
    )
};
export default Profile_Screen;

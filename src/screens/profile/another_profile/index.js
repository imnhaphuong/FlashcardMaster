import React from "react";
import {
    Text,
    Image,
    View,
    StatusBar,
    ScrollView,
    SafeAreaView,
    FlatList,
} from "react-native";
import SegmentedControlTab from "react-native-segmented-control-tab";
import { useState } from "react";
import getProfile from "../../../../getdata/getProfile";
import InsigniaCard from "../../../components/Insignia";
import colors from "../../../../contains/colors";
import styles from "../style";
import UnitCard from "../../../components/UnitCard";
import ClassCard from "../../../components/ClassCard";
import { useSelector } from "react-redux";

const Other_Profile_Screen = (props) => {
    const { user } = useSelector(state => state.user)
    console.log(user, "USER");
    const [selectedIndex, setSelectedIndex] = useState(0);

    const handleIndexChange = (index) => {
        setSelectedIndex(index);
    };

    const [units, setUnits] = useState([]);
    getProfile(setUnits, selectedIndex);

    const [classes, setClasses] = useState([]);
    getProfile(setClasses, selectedIndex);

    const [insignia, setInsignia] = useState([]);
    getProfile(setInsignia, selectedIndex);

    const renderUnitItem = ({ item }) => (
        <UnitCard
            unit_name={item.unitName}
            username={item.creator.fullname}
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

    const renderInsignialItem = (item) => (
        <InsigniaCard
            name={item.name}
            price={item.price}
            image={item.image}
        />
    );
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar
                animated={true}
                backgroundColor={colors.white}
                barStyle={"dark-content"}
                showHideTransition={"fade"}
            />
            <View
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={styles.header}
            >
                <Text style={styles.textHeader}>Hồ sơ</Text>
            </View>
            <View>
                <View style={styles.userinfor}>
                    <View>
                        <Text style={styles.fullname}>Họ và tên</Text>
                        <Text>example@gmail</Text>
                    </View>
                    <Image
                        style={styles.avatar}
                        source={{
                            uri: "https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745",
                        }} />
                </View>
                {/* <View style={styles.userinfor}>
                    <View>
                        <Text>{user.fullname}</Text>
                        <Text>{user.email}</Text>
                    </View>
                    <Image
                        style={styles.avatar}
                        source={{
                            uri: user.avatar,
                        }} />
                </View> */}
                <View style={styles.counts}>
                    <Text>Thống kê</Text>
                    <View style={styles.statics}>
                        <View style={styles.count}>
                            <Text>189 ngày đăng nhập</Text>
                        </View>
                        <View style={styles.count}>
                            <Text>189 ngày đăng nhập</Text>
                        </View>
                    </View>
                    <View style={styles.statics}>
                        <View style={styles.count}>
                            <Text>189 ngày đăng nhập</Text>
                        </View>
                        <View style={styles.count}>
                            <Text>189 ngày đăng nhập</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View>
                <SegmentedControlTab
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
                </SegmentedControlTab>
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
                    <View style={styles.wrapInsignia}>
                        <Text>Huy Hieu</Text>
                        <FlatList
                            data={insignia}
                            renderItem={renderInsignialItem}
                            numColumns={1}
                            keyExtractor={(item) => item.id}
                        />
                    </View>
                )}
            </ScrollView>
        </SafeAreaView >
    )
};
export default Other_Profile_Screen;

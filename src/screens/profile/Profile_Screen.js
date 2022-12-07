import React, { useEffect, useState } from "react";
import {
    Text,
    Image,
    View,
    StatusBar,
    SafeAreaView,
    FlatList,
    TouchableOpacity,
    ActivityIndicator,
} from "react-native";
import SegmentedControlTab from "react-native-segmented-control-tab";
import { getUnitsCreated, getClassesCreated } from "../../../getdata/getProfile";
import colors from "../../../contains/colors";
import styles from "./style";
import UnitCard from "../../components/UnitCard";
import ClassCard from "../../components/ClassCard";
import Setting from "../../../assets/images/header/setting.svg";
import { useDispatch, useSelector } from "react-redux";
import { setUnits, setClasses } from "../../store/slices/userSlice";


const Profile_Screen = (props) => {
    const { user, units, classes } = useSelector(state => state.user);
    const [isLoading, setIsLoading] = useState(true);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const dispatch = useDispatch();
    const handleIndexChange = (index) => {
        setSelectedIndex(index);
    };
    useEffect(() => {
        const fetchData = async () => {
            const unitsCreator = await getUnitsCreated(user._id);
            const classesCreator = await getClassesCreated(user._id);
            dispatch(setUnits(unitsCreator));
            dispatch(setClasses(classesCreator));
            setIsLoading(false);
        }
        fetchData()
    }, [])
    const renderUnitItem = ({ item }) => (
        <UnitCard
            unit={item}
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
                <TouchableOpacity onPress={() => props.navigation.navigate("setting")}>
                    <Setting />
                </TouchableOpacity>
            </View>
            <View>
                {/* <View style={styles.userinfor}>
                    <View>
                        <Text style={styles.fullname}>Họ và tên</Text>
                        <Text>example@gmail</Text>
                    </View>
                    <Image
                        style={styles.avatar}
                        source={{
                            uri: "https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745",
                        }} />
                </View> */}
                <View style={styles.userinfor}>
                    <View>
                        <Text style={styles.fullname}>{user.fullname}</Text>
                        <Text>{user.email}</Text>
                    </View>
                    <Image
                        style={styles.avatar}
                        source={{
                            uri: user.avatar,
                        }} />
                </View>
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
            {isLoading ? <ActivityIndicator /> :
                <>
                    {selectedIndex === 0 && (
                        <View style={styles.wrapUnits}>
                            <FlatList
                                nestedScrollEnabled={true}
                                data={[...units.private, ...units.public]}
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
                                nestedScrollEnabled={true}
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
                                nestedScrollEnabled={true}
                                data={insignia}
                                renderItem={renderInsignialItem}
                                numColumns={1}
                                keyExtractor={(item) => item.id}
                            />
                        </View>
                    )}
                </>
            }
        </SafeAreaView >
    )
};
export default Profile_Screen;

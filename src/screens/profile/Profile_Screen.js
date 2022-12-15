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
    ScrollView,
} from "react-native";
import SegmentedControlTab from "react-native-segmented-control-tab";
import { getUnitsCreated, getClassesCreated, getInsigniaesBought } from "../../../getdata/getProfile";
import colors from "../../../contains/colors";
import styles from "./style";
import UnitCard_Profile from "../../components/UnitCard/UnitCard_Profile";
import ClassCard from "../../components/ClassCard";
import Setting from "../../../assets/images/header/setting.svg";
import InsigniaProfile from "../../components/Insignia/Insignia_Profile";
import { useDispatch, useSelector } from "react-redux";
import { setUnits, setClasses, setInsigniaes } from "../../store/slices/userSlice";
import { useNavigation } from "@react-navigation/native";
import fonts from '../../../contains/fonts';


const Profile_Screen = (props) => {
    const { user, units, classes, insigniaes } = useSelector(state => state.user);
    const [isLoading, setIsLoading] = useState(true);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const handleIndexChange = (index) => {
        setSelectedIndex(index);
    };
    useEffect(() => {
        const fetchData = async () => {
            const unitsCreator = await getUnitsCreated(user._id);
            const classesCreator = await getClassesCreated(user._id);
            const insigniaBought = await getInsigniaesBought(user._id);
            dispatch(setUnits(unitsCreator));
            dispatch(setClasses(classesCreator));
            dispatch(setInsigniaes(insigniaBought));
            console.log(insigniaBought);
            setIsLoading(false);
        }
        fetchData()
    }, [])
    const renderUnitItem = ({ item }) => (
        <UnitCard_Profile
            unit={item}
        />
    );
    const renderClassItem = ({ item }) => (
        <ClassCard
            classData={item}
        />
    );
    const renderInsignialItem = (item) => (
        <InsigniaProfile
            insigniaData={item.item}
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
            <View style={styles.userinfor}>
                <View>
                    <Text style={styles.fullname}>{user.fullname}</Text>
                    <Text style={{ fontFamily: fonts.semibold }}>{user.email}</Text>
                </View>
                <Image
                    style={styles.avatar}
                    source={{
                        uri: user.avatar,
                    }} />
            </View>
            <ScrollView>
                <View style={styles.counts}>
                    <Text style={{ fontFamily: fonts.semibold }}>Thống kê</Text>
                    <View style={styles.statics}>
                        <View style={styles.count}>
                            <Text style={{ fontFamily: fonts.semibold }}>189 ngày đăng nhập</Text>
                        </View>
                        <View style={styles.count}>
                            <Text style={{ fontFamily: fonts.semibold }}>189 ngày đăng nhập</Text>
                        </View>
                    </View>
                    <View style={styles.statics}>
                        <View style={styles.count}>
                            <Text style={{ fontFamily: fonts.semibold }}>189 ngày đăng nhập</Text>
                        </View>
                        <View style={styles.count}>
                            <Text style={{ fontFamily: fonts.semibold }}>189 ngày đăng nhập</Text>
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
                                <FlatList
                                    nestedScrollEnabled={true}
                                    data={[...classes.private, ...classes.public]}
                                    renderItem={renderClassItem}
                                    numColumns={1}
                                    keyExtractor={(item) => item.id}
                                />
                            </View>
                        )}
                        {selectedIndex === 2 && (
                            <View style={styles.wrapInsignia}>
                                <FlatList
                                    ListFooterComponent={() => {
                                        return (
                                            <TouchableOpacity style={styles.btn} onPress={() => {
                                                navigation.navigate("Shop_Screen")
                                            }}>
                                                <Text style={styles.btn_text}>Mua thêm</Text>
                                            </TouchableOpacity>
                                        )
                                    }}
                                    nestedScrollEnabled={true}
                                    data={insigniaes}
                                    renderItem={renderInsignialItem}
                                    numColumns={1}
                                    keyExtractor={(item) => item.id}
                                />
                            </View>
                        )}
                    </>
                }

            </ScrollView>
        </SafeAreaView >
    )
};
export default Profile_Screen;

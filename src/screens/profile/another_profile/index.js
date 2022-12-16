import React from "react";
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
import Back from "../../../../assets/images/header/back.svg";
import SegmentedControlTab from "react-native-segmented-control-tab";
import { useState, useEffect } from "react";
import { getUnitsCreated, getClassesCreated, getInsigniaesBought } from "../../../../getdata/getProfile";
import InsigniaProfile from "../../../components/Insignia/Insignia_Profile";
import colors from "../../../../contains/colors";
import styles from "../style";
import UnitCard_Profile from "../../../components/UnitCard/UnitCard_Profile";
import ClassCard from "../../../components/ClassCard";
import { setUnits, setClasses, setInsigniaes } from "../../../store/slices/userSlice";
import { useDispatch, useSelector } from "react-redux";
import fonts from '../../../../contains/fonts';

const Other_Profile_Screen = (props) => {
    const { user, units, classes, insigniaes } = useSelector(state => state.user);
    if (user._id === props.route.params.id) {
        props.navigation.navigate("nav",{screenName: "profile"})
    }
    const [isLoading, setIsLoading] = useState(true);
    const dispatch = useDispatch();
    const [selectedIndex, setSelectedIndex] = useState(0);
    const handleIndexChange = (index) => {
        setSelectedIndex(index);
    };

    useEffect(() => {
        const fetchData = async () => {
            const unitsCreator = await getUnitsCreated(props.route.params.id);
            const classesCreator = await getClassesCreated(props.route.params.id);
            const insigniaBought = await getInsigniaesBought(props.route.params.id);
            dispatch(setUnits(unitsCreator));
            dispatch(setClasses(classesCreator));
            dispatch(setInsigniaes(insigniaBought));
            setIsLoading(false);
        }
        fetchData()
    }, [])
    const renderUnitItem = ({ item }) => (
        <UnitCard_Profile
            key={item.id}
            unit={item}
        />
    );
    const renderClassItem = ({ item }) => (
        <ClassCard
            key={item.id}
            classData={item}
        />
    );
    const renderInsignialItem = (item) => (
        <InsigniaProfile
            key={item.id}
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
                <TouchableOpacity onPress={() => {
                    props.navigation.goBack()
                }}>
                    <Back />
                </TouchableOpacity>
                <Text style={styles.textHeader}>Hồ sơ</Text>
            </View>
            <View style={styles.userinfor}>
                <View>
                    <Text style={styles.fullname}>{props.route.params.fullname}</Text>
                    <Text style={{ fontFamily: fonts.semibold }}>{props.route.params.email}</Text>
                </View>
                <Image
                    style={styles.avatar}
                    source={{
                        uri: props.route.params.avatar,
                    }} />
            </View>
            <ScrollView
                nestedScrollEnabled={true}
            >
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
                                    data={units.public}
                                    renderItem={renderUnitItem}
                                    numColumns={2}
                                    keyExtractor={(item, index) => item.id + index}
                                />
                            </View>
                        )}
                        {selectedIndex === 1 && (
                            <View style={styles.wrapClasses}>
                                <FlatList
                                    nestedScrollEnabled={true}
                                    data={classes.public}
                                    renderItem={renderClassItem}
                                    numColumns={1}
                                    keyExtractor={(item, index) => item.id + index}
                                />
                            </View>
                        )}
                        {selectedIndex === 2 && (
                            <View style={styles.wrapInsignia}>
                                <FlatList
                                    nestedScrollEnabled={true}
                                    data={insigniaes}
                                    renderItem={renderInsignialItem}
                                    numColumns={1}
                                    keyExtractor={(item, index) => item.id + index}
                                />
                            </View>
                        )}
                    </>
                }

            </ScrollView>
        </SafeAreaView >
    )
};
export default Other_Profile_Screen;

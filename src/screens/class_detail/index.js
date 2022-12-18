import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  StatusBar,
  KeyboardAvoidingView,
  TouchableOpacity,
  Image,
  Share,
  TouchableWithoutFeedback,
  ToastAndroid,
  Pressable,
} from "react-native";
import React, { useState, useEffect } from "react";
import styles from "./style";
import colors from "../../../contains/colors";
import UnitCard from "../../components/UnitCard";
import Back from "../../../assets/images/header/back.svg";
import More from "../../../assets/images/header/more.svg";
import Copy from "../../../assets/images/copy.svg";
import Leave from "../../../assets/images/leave.svg";
import SegmentedControlTab from "react-native-segmented-control-tab";
import UserCard from "../../components/UserCard";
import * as Linking from "expo-linking";
import dynamicLinks from "@react-native-firebase/dynamic-links";
import getClassByJCode from "../../../getdata/getClassByJCode";
import joinClass from "../../../getdata/joinClass";
import leaveClass from "../../../getdata/leaveClass";
import Line from "../../components/Line";
import ModalCreateClass from "../../components/ModalCreateClass";
import ConfirmForm from "../../components/ConfirmForm";
import Spinner from "react-native-loading-spinner-overlay";
import fonts from "../../../contains/fonts";
import * as Clipboard from "expo-clipboard";
import AsyncStorage from "@react-native-async-storage/async-storage";
import indiePushNotifications from "../../../getdata/notifications/indiePushNotifications";
import { useSelector } from "react-redux";
import getUserById from "../../../getdata/getUserById";

const ClassDetailScreen = (props) => {
  //State
  var params = props.route.params;
  const [CLASS, setclass] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [toggleMore, settoggleMore] = useState(false);
  let [visibleUpdateModal, setVisibleUpdateModal] = useState(false);
  let [visibleDeleteModal, setVisibleDeleteModal] = useState(false);

  //get user id when logged to fill in creator id
  const { user } = useSelector((state) => state.user);
  const [myUser, setUser] = useState([]);
  //minor data
  const [members, setMembers] = useState([]);
  const [units, setUnits] = useState([]);
  const [creator, setCreator] = useState([]);
  const [isJoined, setIsJoined] = useState(false);
  const [isCreator, setIsCreator] = useState(false);

  // refesh data
  const onRefreshData = async () => {
    await getClassByJCode(params.jcode, setclass, setLoading);
    if (typeof CLASS.creator !== "undefined") {
      setCreator(CLASS.creator);
      setIsCreator(user._id == CLASS.creator._id);
    }
    if (typeof CLASS.members !== "undefined") {
      setMembers(CLASS.members);
      console.log("recall set members");
      CLASS.members.map((e) => {
        if (e._id == user._id) {
          setIsJoined(true);
        }
      });
    }

    if (typeof CLASS.units !== "undefined") {
      setUnits(CLASS.units);
    }
    await getUserById(setUser, user._id);
  };

  //useEffect
  useEffect(() => {
    onRefreshData();
    const focusHandler = props.navigation.addListener("focus", () => {
      setLoading(true);
    });
    return focusHandler;
  }, [isLoading]);
  //render unit card
  const renderUnitItem = ({ item }) => (
    <UnitCard unit={item} navigation={props.navigation} />
  );

  //render user card
  const renderUserItem = (item) => {
    if (item.index === 0) {
      return (
        <UserCard class_id={CLASS._id} creatorCard={true} user={item.item} />
      );
    }
    return (
      <UserCard
        class_id={CLASS._id}
        isCreator={isCreator}
        creatorCard={false}
        user={item.item}
        setLoading={setLoading}
      />
    );
  };

  // For custom SegmentedControlTab
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleIndexSelect = (index) => {
    //handle tab selection for custom Tab Selection SegmentedControlTab
    setSelectedIndex(index);
  };
  //imp unit
  const onImpUnit = () => {
    props.navigation.navigate("imp_unit", {
      mode: CLASS.mode,
      id: CLASS._id,
      units: CLASS.units,
      class_name: CLASS.name,
      members: CLASS.members,
      jcode: CLASS.jcode
    });
  };
  //creaete unit
  const onCreate = () => {
    props.navigation.push("create_unit", {
      class_id: CLASS._id,
      class_name: CLASS.name,
      members: CLASS.members,
      jcode: CLASS.jcode
    });
  };
  // share
  const onShare = async () => {
    try {
      const payload = {
        dynamicLinkInfo: {
          domainUriPrefix: "https://flashcardmaster.page.link",
          link: `https://flashcardmaster.page.link/class/${CLASS.jcode}`,
          androidInfo: {
            androidPackageName: "com.tdc.flashcardmaster",
          },
          socialMetaTagInfo: {
            socialTitle: "testing title",
            socialDescription: "test description",
            socialImageLink:
              "https://cdn.hashnode.com/res/hashnode/image/upload/v1644157179595/PGl8Mhp9L.png?auto=compress,format&format=webp",
          },
        },
      };
      const url = `https://firebasedynamiclinks.googleapis.com/v1/shortLinks?key=AIzaSyAPsJC1Jtb_0VU3IGRfW-0-UjmFDgTWaJc`;
      const res = await fetch(url, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      const json = await res.json();
      const result = await Share.share({
        message: `Join the class ${json}`,
        url: json.shortLink,
        title: `check ${CLASS.jcode}`,
      });
      if (result.action === Share.sharedAction) {
        console.log("share" + CLASS.jcode);
      } else if (result.action == Share.dismissedAction) {
      }
    } catch (err) {
      console.log(err);
    }
  };
  //update
  const onUpdate = () => {
    setVisibleUpdateModal(true);
  };
  //delete
  const onDelete = () => {
    setVisibleDeleteModal(true);
  };

  //join
  const onJoinRequest = async () => {
    setLoading(true);
    await joinClass(CLASS._id, myUser._id, setIsJoined);
    await indiePushNotifications(
      creator._id,
      user._id,
      `${myUser.fullname} đã tham gia lớp "${CLASS.name}" của bạn`,
      `Hãy cố gắng tạo ra nhiều bài học. Cùng phát triển cộng đồng Fcard nào`,
      CLASS.jcode
    );
  };

  //leave
  const onLeaveRequest = () => {
    setLoading(true);
    leaveClass(CLASS._id, user._id, setIsJoined);
  };
  return (
    <SafeAreaView style={styles.container}>
      <Spinner color={colors.violet} visible={isLoading} />
      <StatusBar
        animated={true}
        backgroundColor={colors.white}
        barStyle={"dark-content"}
        showHideTransition={"fade"}
      />
      {/* Header */}
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.header}
      >
        <TouchableOpacity
          onPress={() => {
            props.navigation.goBack();
          }}
        >
          <Back />
        </TouchableOpacity>
        <Text style={styles.textHeader}>Lớp học</Text>
        <TouchableOpacity
          onPress={() => {
            settoggleMore(!toggleMore);
          }}
          style={
            toggleMore
              ? {
                  borderColor: colors.violet,
                  borderWidth: 1,
                  borderRadius: 5,
                }
              : null
          }
        >
          <More />
        </TouchableOpacity>
      </KeyboardAvoidingView>

      {/* Content */}
      <TouchableWithoutFeedback onPress={() => settoggleMore(false)}>
        <View style={styles.wrapContent}>
          {/* Options */}
          {toggleMore ? (
            <View style={[styles.wrapOptions, { zIndex: 10 }]}>
              <TouchableOpacity onPress={onShare} style={styles.option}>
                <View>
                  <Text>Chia sẻ</Text>
                </View>
              </TouchableOpacity>
              <Line backgroundColor={colors.violet} opacity={0.2} />
              {user._id == creator._id ? (
                <>
                  <TouchableOpacity onPress={onCreate} style={styles.option}>
                    <View>
                      <Text>Tạo học phần</Text>
                    </View>
                  </TouchableOpacity>
                  <Line backgroundColor={colors.violet} opacity={0.2} />
                  <TouchableOpacity onPress={onImpUnit} style={styles.option}>
                    <View>
                      <Text>Thêm học phần</Text>
                    </View>
                  </TouchableOpacity>
                  <Line backgroundColor={colors.violet} opacity={0.2} />

                  <TouchableOpacity onPress={onUpdate} style={styles.option}>
                    <View>
                      <Text>Chỉnh sửa</Text>
                    </View>
                  </TouchableOpacity>
                  <Line backgroundColor={colors.violet} opacity={0.2} />
                  <TouchableOpacity onPress={onDelete} style={styles.option}>
                    <View>
                      <Text>Xoá lớp học</Text>
                    </View>
                  </TouchableOpacity>
                </>
              ) : isJoined ? (
                <>
                  <TouchableOpacity
                    onPress={onLeaveRequest}
                    style={styles.option}
                  >
                    <View>
                      <Text>Rời lớp học</Text>
                    </View>
                  </TouchableOpacity>
                </>
              ) : (
                <>
                  <TouchableOpacity
                    onPress={onJoinRequest}
                    style={styles.option}
                  >
                    <View>
                      <Text>Tham gia lớp</Text>
                    </View>
                  </TouchableOpacity>
                </>
              )}
            </View>
          ) : null}
          {/* Class infor */}
          <View style={styles.inforArea}>
            {CLASS.mode ? (
              <Image
                style={styles.tagMode}
                source={require("../../../assets/images/classmode/public.png")}
              />
            ) : (
              <Image
                style={styles.tagMode}
                source={require("../../../assets/images/classmode/private.png")}
              />
            )}
            <Text style={styles.className}>{CLASS.name} </Text>
            <View style={styles.wrapUser}>
              <Image style={styles.avatar} source={{ uri: creator.avatar }} />
              <Text style={styles.username}>{creator.fullname}</Text>
            </View>
            <View style={styles.wrapJcode}>
              <Text style={styles.jcode}>
                Mã: <Text style={{ color: colors.violet }}>{CLASS.jcode} </Text>
              </Text>
              <TouchableOpacity
                onPress={async () => {
                  await Clipboard.setStringAsync(CLASS.jcode);
                  ToastAndroid.show(
                    "Đã copy mã lớp vào Clipboard!",
                    ToastAndroid.CENTER
                  );
                }}
              >
                <Copy />
              </TouchableOpacity>
            </View>

            {/* Join & Leave Button */}
            {!isCreator ? (
              <View style={{ alignItems: "flex-end" }}>
                {isJoined ? (
                  <Pressable
                    style={{
                      flexDirection: "row",
                      width: "50%",
                      backgroundColor: colors.violet,
                      padding: 12,
                      borderRadius: 10,
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                    onPress={onLeaveRequest}
                  >
                    <Leave />
                    <Text
                      style={{
                        paddingLeft: 8,
                        color: colors.white,
                        fontFamily: fonts.semibold,
                      }}
                    >
                      Rời khỏi lớp
                    </Text>
                  </Pressable>
                ) : (
                  <Pressable
                    style={{
                      width: "50%",
                      backgroundColor: colors.violet,
                      padding: 12,
                      borderRadius: 10,
                      alignItems: "center",
                    }}
                    onPress={onJoinRequest}
                  >
                    <Text
                      style={{
                        color: colors.white,
                        fontFamily: fonts.semibold,
                      }}
                    >
                      + Tham gia
                    </Text>
                  </Pressable>
                )}
              </View>
            ) : null}
          </View>
          {/* Tabs */}
          <SegmentedControlTab
            values={[
              `Học phần (${units.length})`,
              `Thành viên (${members.length})`,
            ]}
            selectedIndex={selectedIndex}
            onTabPress={handleIndexSelect}
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
            tabTextStyle={{
              fontFamily: fonts.regular,
              fontSize: 14,
              color: colors.graySecondary,
            }}
            activeTabTextStyle={{
              fontFamily: fonts.semibold,
              color: colors.violet,
            }}
          />
          {!isJoined && CLASS.mode == 0 ? (
            <Text style={styles.blockNotJoin}>
              Tham gia lớp để được nhìn thấy nội dung này
            </Text>
          ) : (
            <>
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
                <View style={styles.wrapUnits}>
                  <FlatList
                    data={members}
                    renderItem={renderUserItem}
                    numColumns={1}
                  />
                </View>
              )}
            </>
          )}
        </View>
      </TouchableWithoutFeedback>
      {/* Update modal */}
      <ModalCreateClass
        visible={visibleUpdateModal}
        _id={CLASS._id}
        name={CLASS.name}
        mode={CLASS.mode}
        event={"update"}
        setLoading={setLoading}
        setVisibleModal={setVisibleUpdateModal}
        settoggleMore={settoggleMore}
      />
      {/* Delete confirm form */}
      {visibleDeleteModal && CLASS ? (
        <ConfirmForm
          visible={visibleDeleteModal}
          _id={CLASS._id}
          name={CLASS.name}
          event={"delete"}
          setVisibleModal={setVisibleDeleteModal}
          setLoading={setLoading}
          navigation={props.navigation}
        />
      ) : null}
    </SafeAreaView>
  );
};

export default ClassDetailScreen;

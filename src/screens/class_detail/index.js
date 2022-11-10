import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  StatusBar,
  KeyboardAvoidingView,
  Pressable,
  TouchableOpacity,
  Image,
  Share,
  TouchableWithoutFeedback,
} from "react-native";
import React, { useState, useEffect } from "react";
import styles from "./style";
import colors from "../../../contains/colors";
import UnitCard from "../../components/UnitCard";
import Back from "../../../assets/images/header/back.svg";
import More from "../../../assets/images/header/more.svg";
import SegmentedControlTab from "react-native-segmented-control-tab";
import UserCard from "../../components/UserCard";
import * as Linking from "expo-linking";
import dynamicLinks from "@react-native-firebase/dynamic-links";
import getClassById from "../../../getdata/getClassById";
import getUserByID from "../../../getdata/getUserById";
import Line from "../../components/Line";
import ModalCreateClass from "../../components/ModalCreateClass";
import ConfirmForm from "../../components/ConfirmForm";
import Spinner from "react-native-loading-spinner-overlay";

const ClassDetailScreen = (props) => {
  //State
  var params = props.route.params;
  const [CLASS, setclass] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [toggleMore, settoggleMore] = useState(false);
  let [visibleUpdateModal, setVisibleUpdateModal] = useState(false);
  let [visibleDeleteModal, setVisibleDeleteModal] = useState(false);

  //minor data
  const [members, setMembers] = useState([]);
  const [units, setUnits] = useState([]);
  const [creator, setCreator] = useState([]);
  //useEffect
  useEffect(() => {
    getClassById(setclass,params._id, setLoading);
    if (typeof CLASS.members !== "undefined") {
      setMembers(CLASS.members);
    }
    if (typeof CLASS.units !== "undefined") {
      setUnits(CLASS.units);
    }
    if (typeof CLASS.creator !== "undefined") {
      setCreator(CLASS.creator);
    }
    console.log("call use effect in class detail");
  }, [isLoading]);

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
  const renderUserItem = (item) => <UserCard isCreator={true} />;

  // For custom SegmentedControlTab
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleIndexSelect = (index) => {
    //handle tab selection for custom Tab Selection SegmentedControlTab
    setSelectedIndex(index);
  };
  //imp unit
  const onImpUnit = () => {
    props.navigation.navigate("imp_unit");
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
        message: `Join the class ${json.shortLink}`,
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
              <TouchableOpacity onPress={onImpUnit} style={styles.option}>
                <Text>Thêm học phần</Text>
              </TouchableOpacity>
              <Line backgroundColor={colors.violet} opacity={0.2} />
              <TouchableOpacity onPress={onShare} style={styles.option}>
                <Text>Chia sẻ</Text>
              </TouchableOpacity>
              <Line backgroundColor={colors.violet} opacity={0.2} />
              <TouchableOpacity onPress={onUpdate} style={styles.option}>
                <Text>Chỉnh sửa</Text>
              </TouchableOpacity>
              <Line backgroundColor={colors.violet} opacity={0.2} />
              <TouchableOpacity onPress={onDelete} style={styles.option}>
                <Text>Xóa lớp học</Text>
              </TouchableOpacity>
            </View>
          ) : null}

          <View style={styles.inforArea}>
            <Text style={styles.className}>{CLASS.name} </Text>
            <View style={styles.wrapUser}>
              <Image
                style={styles.avatar}
                source={require("../../../assets/images/avt-default.png")}
              />
              <Text style={styles.username}>{creator.fullname}</Text>
            </View>
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
          {selectedIndex === 1 && (
            <View style={styles.wrapUnits}>
              <FlatList
                data={members}
                renderItem={renderUserItem}
                numColumns={1}
              />
            </View>
          )}
        </View>
      </TouchableWithoutFeedback>

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

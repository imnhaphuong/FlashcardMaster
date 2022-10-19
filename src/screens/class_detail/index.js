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
} from "react-native";
import React, { useState, useEffect } from "react";
import styles from "./style";
import colors from "../../../contains/colors";
import UnitCard from "../../components/UnitCard";
import Back from "../../../assets/images/header/back.svg";
import More from "../../../assets/images/header/more.svg";
import getData from "./data";
import SegmentedControlTab from "react-native-segmented-control-tab";
import UserCard from "../../components/UserCard";
import * as Linking from "expo-linking";
import dynamicLinks from "@react-native-firebase/dynamic-links";

const ClassDetailScreen = (props) => {
  var params = props.route.params;
  const [CLASS, setdata] = useState([]);
  getData(setdata, params.id);

  const UNITS = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      unit_name: "Bài 1",
      number_of_cards: "0",
      username: "user0",
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      unit_name: "Bài 2",
      number_of_cards: "10",
      username: "user 1231323",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      unit_name: "Bài 3",
      username: "user 112313",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      unit_name: "Bài 4: this is a long unit name",
      username: "nguyen van a",
    },
  ];
  const MEMBERS = ["HI"];

  const renderUnitItem = ({ item }) => (
    <UnitCard
      unit_name={item.unit_name}
      username={item.username}
      number_of_cards={item.number_of_cards}
    />
  );
  const renderUserItem = (item) => <UserCard isCreator={true} />;

  const numberOfMembers = MEMBERS.length;
  const numberOfUnits = UNITS.length;
  // For custom SegmentedControlTab
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleIndexSelect = (index) => {
    //handle tab selection for custom Tab Selection SegmentedControlTab
    setSelectedIndex(index);
  };
  const [data, setabc] = useState([]);

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

  return (
    <SafeAreaView style={styles.container}>
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
        <TouchableOpacity>
          <More />
        </TouchableOpacity>
      </KeyboardAvoidingView>

      {/* Content */}
      <View style={styles.wrapContent}>
        {/* Options */}
        <View style={[styles.wrapOptions, { zIndex: 10 }]}>
          <TouchableOpacity onPress={onShare}>
            <Text style={styles.option}>Chia sẻ</Text>
          </TouchableOpacity>

          {/* <Text style={styles.option}>Options</Text> */}
        </View>
        <View style={styles.inforArea}>
          <Text style={styles.className}>{CLASS.name} </Text>
          <View style={styles.wrapUser}>
            <Image
              style={styles.avatar}
              source={require("../../../assets/images/avt-default.png")}
            />
            <Text style={styles.username}>{CLASS.creator}</Text>
          </View>
        </View>
        {/* Tabs */}
        <SegmentedControlTab
          values={[
            `Học phần (${numberOfUnits})`,
            `Thành viên (${numberOfMembers})`,
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
              data={UNITS}
              renderItem={renderUnitItem}
              numColumns={2}
              keyExtractor={(item) => item.id}
            />
          </View>
        )}
        {selectedIndex === 1 && (
          <View style={styles.wrapUnits}>
            <FlatList
              data={MEMBERS}
              renderItem={renderUserItem}
              numColumns={1}
            />
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

export default ClassDetailScreen;

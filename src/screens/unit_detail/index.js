import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  StatusBar,
  KeyboardAvoidingView,
  TouchableOpacity,
  Image,
  TouchableWithoutFeedback,
  ScrollView,
} from "react-native";
import React, { useState, useEffect } from "react";
import styles from "./style";
import colors from "../../../contains/colors";
import Back from "../../../assets/images/header/back.svg";
import More from "../../../assets/images/header/more.svg";
import Line from "../../components/Line";
import CustomFlipCard from "../../components/CustomFlipCard";
import SimpleCard from "../../components/SimpleCard";
import getUnitById from "../../../getdata/getUnitById";
import Spinner from "react-native-loading-spinner-overlay";

const UnitDetail = (props) => {
  //State
  var params = props.route.params;
  const [toggleMore, settoggleMore] = useState(false);
  const [isLoading, setLoading] = useState(true);
  const [UNIT, setUnit] = useState([]);
  //minor data
  const [flashcards, setFlashcards] = useState([]);

  useEffect(() => {
    
    getUnitById('636a899ea63abd0261109b72', setUnit, setLoading);
    if (typeof UNIT.flashcards !== "undefined") {
      setFlashcards(UNIT.flashcards);
    }
  }, [isLoading]);

  const myRenderItem = (e) => {
    return (
      <CustomFlipCard
        term={e.item.term}
        define={e.item.define}
        example={e.item.example}
        image={e.item.image}
      />
    );
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
        <TouchableOpacity
          onPress={() => {
            settoggleMore(!toggleMore);
          }}
        >
          <More />
        </TouchableOpacity>
      </KeyboardAvoidingView>

      {/* Options */}
      {/* <View style={styles.wrapContent}> */}
        {toggleMore ? (
          <View style={[styles.wrapOptions, { zIndex: 100 }]}>
            {/* <TouchableOpacity style={styles.option}>
            <Text>Option</Text>
          </TouchableOpacity> */}
            {/* <Line backgroundColor={colors.violet} opacity={0.2} /> */}
            <TouchableOpacity onPress={() => console.log("hdasjd")} style={styles.option}>
              <Text>Sửa học phần</Text>
            </TouchableOpacity>
            <Line backgroundColor={colors.violet} opacity={0.2} />
            <TouchableOpacity style={styles.option}>
              <Text>Xóa học phần</Text>
            </TouchableOpacity>
          </View>
        ) : null}
      {/* </View> */}
      {/* Content */}
      <TouchableWithoutFeedback>
        <ScrollView style={styles.wrapContent} horizontal={false}>
          {/* Infor */}
          <View style={styles.inforArea}>
            <Text style={styles.unitName}>{UNIT.unitName}</Text>
            <Text style={styles.numberOfUnits}>
              {flashcards.length} thuật ngữ
            </Text>
            {/* <View style={styles.wrapUser}>
              <Image
                style={styles.avatar}
                source={require("../../../assets/images/avt-default.png")}
              />
              <Text style={styles.username}>user 11231</Text>
            </View> */}
          </View>

          {/* Flip Cards */}
          <FlatList
            contentContainerStyle={styles.wrapFlipCards}
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            data={flashcards}
            renderItem={myRenderItem}
            numColumns={1}
            keyExtractor={(item) => {
              return item._id;
            }}
          />
          <View style={styles.wrapButtons}>
            <TouchableOpacity style={[styles.btn, styles.btnLearn]}>
              <Text style={[styles.textBtn, styles.textLearn]}>Học</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.btn, styles.btnTest]}>
              <Text style={styles.textBtn}>Kiểm tra</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.btn, styles.btnMatch]}>
              <Text style={styles.textBtn}>Ghép thẻ</Text>
            </TouchableOpacity>
          </View>

          {/* List Cards */}
          <View style={styles.wrapListCardsArea}>
            <Text
              style={{ fontSize: 16, fontWeight: "500", paddingBottom: 20 }}
            >
              Thẻ
            </Text>
            {flashcards.map((e) => {
              return (
                <SimpleCard
                  term={e.term}
                  define={e.define}
                  example={e.example}
                  image={e.image}
                />
              );
            })}
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

export default UnitDetail;

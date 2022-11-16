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
import fonts from "../../../contains/fonts";
import SysModal from "../../components/SysModal/SysModal";

const UnitDetail = (props) => {
  //State
  var params = props.route.params;
  const [toggleMore, settoggleMore] = useState(false);
  const [isLoading, setLoading] = useState(true);
  const [UNIT, setUnit] = useState([]);
  //minor data
  const [flashcards, setFlashcards] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [mess, setMess] = useState('');
  const url = "http://192.168.43.158:3000/api/units"

  const onClose = () => {
    setShowModal(false);

  }
  useEffect(() => {
    getUnitById(params.id, setUnit, setLoading);
    if (typeof UNIT.flashcards !== "undefined") {
      setFlashcards(UNIT.flashcards);
    }
  }, [isLoading]);
  const message = () => {
    setMess("Bạn có muốn xóa học phần này không?")
    setShowModal(true)
  }
  const deleteUnit = async (id) => {
    try {
      console.log("deleteUnit", id);
      const data = { _id: id }
      await fetch('http://192.168.43.158:3000/api/units/deleted', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify(data),
      }).then(res => res.json()
      ).then(data => console.log("delaste", data))
      setTimeout(() => {
        setShowModal(false)
        props.navigation.navigate("home")
      }, 1000)
    } catch (error) {
      console.log(error);
    }
  }
  // console.log("unit_detail",UNIT.flashcards);
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
      <SysModal visible={showModal} message={mess} type="OPTION" onClose={onClose} onPress={() => deleteUnit(UNIT._id)} />
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
      {/* <View style={styles.wrap}> */}
      {toggleMore ? (
        <View style={[styles.wrapOptions, { zIndex: 1000 }]}>
          {/* <TouchableOpacity style={styles.option}>
            <Text>Option</Text>
          </TouchableOpacity> */}
          {/* <Line backgroundColor={colors.violet} opacity={0.2} /> */}
          <TouchableOpacity onPress={() => {
            props.navigation.replace("create_unit", {
              id: params.id,
            });
          }} style={styles.option}>
            <Text style={{ fontFamily: fonts.semibold }}>Sửa học phần</Text>
          </TouchableOpacity>
          <Line backgroundColor={colors.violet} opacity={0.2} />
          <TouchableOpacity onPress={() => message()}
            style={styles.option}>
            <Text style={{ fontFamily: fonts.semibold }}>Xóa học phần</Text>
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
            nestedScrollEnabled={true}
            contentContainerStyle={styles.wrapFlipCards}
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            data={flashcards}
            renderItem={myRenderItem}
            numColumns={1}
            // maxHeight={300}
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

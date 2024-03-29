import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  StatusBar,
  KeyboardAvoidingView,
  TouchableOpacity,
  TouchableWithoutFeedback,
  ScrollView,
  ToastAndroid,
} from "react-native";
import React, { useState, useEffect } from "react";
import styles from "./style";
import colors from "../../../contains/colors";
import Back from "../../../assets/images/header/back.svg";
import More from "../../../assets/images/header/more.svg";
import Filter from "../../../assets/images/filters/filters.svg"
import Line from "../../components/Line";
import CustomFlipCard from "../../components/CustomFlipCard";
import SimpleCard from "../../components/SimpleCard";
import getUnitById from "../../../getdata/getUnitById";
import Spinner from "react-native-loading-spinner-overlay";
import fonts from "../../../contains/fonts";
import SysModal from "../../components/SysModal/SysModal";
import { resetQuest } from "../../store/slices/questSlice"
import { updateScore } from "../../store/slices/userSlice"
import { createFcard, resetFcard } from "../../store/slices/fcardSlice"
import { useDispatch, useSelector } from 'react-redux'


const UnitDetail = (props) => {
  //State
  var params = props.route.params;
  const [toggleMore, settoggleMore] = useState(false);
  const [isLoading, setLoading] = useState(true);
  const [UNIT, setUnit] = useState([]);
  const [tempFcard, settempFcard] = useState([]);
  const [toggleFilter, settoggleFilter] = useState(false);
  const [filterType, setfilterType] = useState(0);
  //minor data
  const [flashcards, setFlashcards] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [mess, setMess] = useState("");
  const [OPTION, SET_OPTION] = useState("OPTION");
  const url = "https://flashcard-master.vercel.app/api/units";
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.user);

  function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }
  const onClose = () => {
    setShowModal(false);
  };
  useEffect(() => {
    getUnitById(params.id, setUnit, setLoading);
    if (typeof UNIT.flashcards !== "undefined") {
      setFlashcards(UNIT.flashcards);
      settempFcard(UNIT.flashcards.map((e) => e));
    }
    console.log("useEffect",UNIT)
  },  [isLoading]);

  const message = () => {
    setMess("Bạn có muốn xóa học phần này không?");
    setShowModal(true);
  };
  const deleteUnit = async (id) => {
    SET_OPTION("OPTION")
    setLoading(true);
    try {
      console.log("deleteUnit", id);
      const data = { _id: id };
      await fetch(`${url}/deleted`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((data) => console.log("delaste", data));
      setShowModal(false);
      setLoading(false);
      setTimeout(() => {
        ToastAndroid.show("Xóa học phần thành công", ToastAndroid.SHORT)
        props.navigation.goBack();

      }, 1000);
    } catch (error) {
      console.log(error);
    }
  };
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
      <SysModal
        visible={showModal}
        message={mess}
        type={OPTION}
        onClose={onClose}
        onPress={() => {
          console.log("delete", UNIT._id);
          deleteUnit(UNIT._id);
        }}
      />
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
        {UNIT.creator === user._id ? <TouchableOpacity
          onPress={() => {
            settoggleMore(!toggleMore);
          }}
          
          
        >
          <More />
        </TouchableOpacity> : ""}

      </KeyboardAvoidingView>

      {/* Options */}
      {/* <View style={styles.wrapContent}> */}
      {toggleMore ? (
        <View style={[styles.wrapOptions, { zIndex: 100 }]}>
          <TouchableOpacity
            onPress={() => {
              settoggleMore(false)
              props.navigation.replace("create_unit", {
                id: params.id, UNIT: UNIT
              });
            }}
            style={styles.option}
          >
            <Text style={{ fontFamily: fonts.semibold }}>Sửa học phần</Text>
          </TouchableOpacity>
          <Line backgroundColor={colors.violet} opacity={0.2} />
          <TouchableOpacity onPress={() => { settoggleMore(false); message() }} style={styles.option}>
            <Text style={{ fontFamily: fonts.semibold }}>Xóa học phần</Text>
          </TouchableOpacity>
        </View>
      ) : null}
      {/* </View> */}
      {/* Content */}
      <TouchableWithoutFeedback>
        <ScrollView style={styles.wrapContent}
          horizontal={false}>
          {/* Infor */}
          <View style={styles.inforArea}>
            <Text style={styles.unitName}>{UNIT.unitName}</Text>
            <Text style={styles.numberOfUnits}>
              {flashcards.length} thuật ngữ
            </Text>
          </View>

          {/* Flip Cards */}
          <View>
          <FlatList
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
          </View>
      
          <View style={styles.wrapButtons}>
            <TouchableOpacity onPress={() => {
              shuffleArray(flashcards)
              dispatch(resetFcard(params.id))
              const payload = {
                id: params.id,
                flashcards: flashcards,
              }
              dispatch(createFcard(payload))
              let fcard1 = null;
              if (flashcards.length > 10) {
                fcard1 = flashcards.slice(0, Math.floor(flashcards.length / 2))
                // console.log("fcard1dasd", fcard1);
                props.navigation.navigate('learn', {
                  flashcards: fcard1, id: params.id,
                })
              }else{
                setMess("Học phần phải nhiều hơn 10 thẻ mới có thể học")
                SET_OPTION("NONE")
                setShowModal(true)
                setTimeout(() => {
                  setShowModal(false);
                }, 2500);
              }

            }} style={[styles.btn, styles.btnLearn]}>
              <Text style={[styles.textBtn, styles.textLearn]}>Học</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
              shuffleArray(flashcards)
              dispatch(resetQuest(params.id))
              dispatch(updateScore(0))
              if (flashcards.length < 4) {
                setMess("Học phần phải nhiều hơn 3 thẻ mới có thể làm kiểm tra")
                SET_OPTION("NONE")
                setShowModal(true)
                setTimeout(() => {
                  setShowModal(false);
                }, 2500);
              } else {
                props.navigation.replace('test', {
                  flashcards: flashcards, id: params.id
                })
              }

            }} style={[styles.btn, styles.btnTest]}>
              <Text style={styles.textBtn}>Kiểm tra</Text>
            </TouchableOpacity>
          </View>

          {/* List Cards */}
          <View style={styles.wrapListCardsArea}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: fonts.regular,
                  paddingTop: 8,
                  paddingBottom: 20,
                }}
              >
                Thẻ
              </Text>

              {toggleFilter ? (
                <View style={[styles.wrapFilters]}>
                  {/* Original */}
                  <TouchableOpacity
                    style={styles.option}
                    onPress={() => {
                      setfilterType(0);
                      settempFcard(flashcards);
                      settoggleFilter(false);
                    }}
                  >
                    <Text
                      style={[
                        {
                          fontFamily: fonts.semibold,
                          color: colors.graySecondary,
                        },
                        filterType == 0 ? styles.pressed : null,
                      ]}
                    >
                      Thứ tự gốc
                    </Text>
                  </TouchableOpacity>
                  <Line backgroundColor={colors.violet} opacity={0.2} />

                  {/* A-Z */}

                  <TouchableOpacity
                    style={styles.option}
                    onPress={() => {
                      setfilterType(1);
                      const temp = tempFcard.sort(function (a, b) {
                        if (a.term < b.term) {
                          return -1;
                        }
                        if (a.term > b.term) {
                          return 1;
                        }
                        return 0;
                      });
                      settoggleFilter(false);
                    }}
                  >
                    <Text
                      style={[
                        {
                          fontFamily: fonts.semibold,
                          color: colors.graySecondary,
                        },
                        filterType == 1 ? styles.pressed : null,
                      ]}
                    >
                      Theo A - Z
                    </Text>
                  </TouchableOpacity>
                  <Line backgroundColor={colors.violet} opacity={0.2} />
                  {/* Z-A */}
                  <TouchableOpacity
                    style={styles.option}
                    onPress={() => {
                      setfilterType(2);
                      const temp = tempFcard.sort(function (a, b) {
                        if (a.term < b.term) {
                          return 1;
                        }
                        if (a.term > b.term) {
                          return -1;
                        }
                        return 0;
                      });
                      settoggleFilter(false);
                    }}
                  >
                    <Text
                      style={[
                        {
                          fontFamily: fonts.semibold,
                          color: colors.graySecondary,
                        },
                        filterType == 2 ? styles.pressed : null,
                      ]}
                    >
                      Theo Z - A
                    </Text>
                  </TouchableOpacity>
                </View>
              ) : (
                <TouchableOpacity
                  onPress={() => {
                    settoggleFilter(!toggleFilter);
                  }}
                >
                  <Filter />
                </TouchableOpacity>
              )}
            </View>
            <FlatList
              showsHorizontalScrollIndicator={false}
              data={tempFcard}
              renderItem={(e) => {
                return (
                  <SimpleCard
                    term={e.item.term}
                    define={e.item.define}
                    example={e.item.example}
                    image={e.item.image}
                  />
                );
              }}
              numColumns={1}
              keyExtractor={(item) => {
                return item._id;
              }}
            />
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </SafeAreaView >
  );
};

export default UnitDetail;

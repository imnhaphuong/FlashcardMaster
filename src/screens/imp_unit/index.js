import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  KeyboardAvoidingView,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React, { useState, useEffect } from "react";
import styles from "./style";
import Spinner from "react-native-loading-spinner-overlay";
import colors from "../../../contains/colors";
import Back from "../../../assets/images/header/back.svg";
import Check from "../../../assets/images/header/check.svg";
import ImpUnitCard from "../../components/ImpUnitCard";
import getAllCreatedUnits from "../../../getdata/getAllCreatedUnits";
import impUnitToClass from "../../../getdata/impUnitToClass";
import addClassToUnit from "../../../getdata/addClassToUnit";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ImportUnit = (props) => {
  //State
  const [isLoading, setLoading] = useState(true);
  const [UNITS, setUnits] = useState([]);
  const units_of_class = props.route.params.units;
  var [selectedArray, setSelectedArray] = useState([
    "636a87f7a63abd0261109b6c",
  ]);

  //set data for selected array
  const pushItemToSelectedArray = (id) => {
    if (!selectedArray.includes(id)) {
      selectedArray.push(id);
    }
  };
  //remove data from selected array
  const removeItemFromSelectedArray = async (id) => {
    if (selectedArray.includes(id)) {
      const index = selectedArray.indexOf(id);
      if (index !== -1) {
        selectedArray.splice(index, 1);
      }
    }
  };

  //minor data
  const [userId, setuserId] = useState("");
  AsyncStorage.getItem("userId").then((result) => {
    setuserId(result);
  });

  //useEffect
  useEffect(() => {
    getAllCreatedUnits(userId, setUnits, setLoading);
    //set ids to selected array
    const ids = units_of_class.map((e) => e._id);
    setSelectedArray(ids);
  }, [isLoading]);

  //submit data and update units of class
  const submitUpdate = () => {
    setLoading(true);
    impUnitToClass(props.route.params.id, selectedArray, setLoading);
    selectedArray.map((e) => {
      console.log(e);
      addClassToUnit(e, props.route.params.id, setLoading);
    });
    props.navigation.goBack();
  };

  const renderUnitItem = ({ item }) => (
    <ImpUnitCard
      selectedArray={selectedArray}
      setSelectedArray={setSelectedArray}
      pushItemToSelectedArray={pushItemToSelectedArray}
      removeItemFromSelectedArray={removeItemFromSelectedArray}
      id={item._id}
      mode={item.mode}
      unit_name={item.unitName}
      creator={item.creator}
      number_of_cards={
        typeof item.flashcards !== "undefined" ? item.flashcards.length : 0
      }
      class_mode={props.route.params.mode}
    />
  );
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
        <Text style={styles.textHeader}>Thêm học phần</Text>
        <TouchableOpacity
          onPress={() => {
            submitUpdate();
          }}
        >
          <Check />
        </TouchableOpacity>
      </KeyboardAvoidingView>
      <View style={styles.wrapUnits}>
        <FlatList
          data={UNITS.public}
          renderItem={renderUnitItem}
          numColumns={2}
          keyExtractor={(item) => item.id}
        />
      </View>

      {props.route.params.mode ? (
        <View style={styles.note}>
          <Text style={styles.textNote}>
            Lưu ý: Các học phần không được công khai không thể thêm vào lớp học
            công khai
          </Text>
        </View>
      ) : null}

      <View style={styles.wrapUnits}>
        <FlatList
          data={UNITS.private}
          renderItem={renderUnitItem}
          numColumns={2}
          keyExtractor={(item) => item.id}
        />
      </View>
    </SafeAreaView>
  );
};

export default ImportUnit;

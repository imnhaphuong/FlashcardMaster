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
import React, { useState } from "react";
import styles from "./style";
import colors from "../../../contains/colors";
import Back from "../../../assets/images/header/back.svg";
import More from "../../../assets/images/header/more.svg";
import Line from "../../components/Line";
import CustomFlipCard from "../../components/CustomFlipCard";
import SimpleCard from "../../components/SimpleCard";

const UnitDetail = (props) => {
  const [toggleMore, settoggleMore] = useState(false);
  const [UNITS, setUnits] = useState(["1", "2", "3"]);
  const myRenderItem = () => {
    return <CustomFlipCard />;
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
        <TouchableOpacity
          onPress={() => {
            settoggleMore(!toggleMore);
          }}
        >
          <More />
        </TouchableOpacity>
      </KeyboardAvoidingView>

      {/* Options */}
      {toggleMore ? (
        <View style={[styles.wrapOptions, { zIndex: 10 }]}>
          <TouchableOpacity style={styles.option}>
            <Text>Option</Text>
          </TouchableOpacity>
          <Line backgroundColor={colors.violet} opacity={0.2} />
          <TouchableOpacity style={styles.option}>
            <Text>Option</Text>
          </TouchableOpacity>
          <Line backgroundColor={colors.violet} opacity={0.2} />
          <TouchableOpacity style={styles.option}>
            <Text>Option</Text>
          </TouchableOpacity>
        </View>
      ) : null}

      {/* Content */}
      <TouchableWithoutFeedback>
        <ScrollView style={styles.wrapContent}>
          {/* Infor */}
          <View style={styles.inforArea}>
            <Text style={styles.unitName}>Ten6 hooc phan</Text>
            <Text style={styles.numberOfUnits}>Ten6 hooc phan</Text>
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
            data={UNITS}
            renderItem={myRenderItem}
            numColumns={1}
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
            <SimpleCard />
            <SimpleCard />
            <SimpleCard />
            <SimpleCard />
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

export default UnitDetail;

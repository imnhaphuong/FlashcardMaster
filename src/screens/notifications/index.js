import {
  View,
  Text,
  SafeAreaView,
  KeyboardAvoidingView,
  StatusBar,
  FlatList,
} from "react-native";
import React, { useState, useEffect, useCallback } from "react";
import styles from "./style";
import colors from "../../../contains/colors";
import NotiCard from "../../components/NotiCard";
import BlankNoti from "../../../assets/images/noti/blank_noti.svg";
import Spinner from "react-native-loading-spinner-overlay";
import { useFocusEffect } from "@react-navigation/native";
import { getIndieNotificationInbox } from "native-notify";
import { useSelector } from "react-redux";
import { configNotify } from "../../../contains/common";

const NotificationsScreen = (props) => {
  //State
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const { user } = useSelector((state) => state.user);

  const myRenderItem = ({ item }) => (
    <NotiCard
      noti={item}
    />
  );

  //useEffect
  useFocusEffect(() => {
    (async () => {
      let notifications = await getIndieNotificationInbox(
        user._id,
        configNotify.appId,
        configNotify.appToken
      );
      setData(notifications);
      setLoading(false);
    })();
  });

  return (
    <SafeAreaView style={styles.container}>
      <Spinner color={colors.violet} visible={isLoading} />

      {/* Status Bar & Header*/}
      <StatusBar
        animated={true}
        backgroundColor={colors.white}
        barStyle={"dark-content"}
        showHideTransition={"fade"}
      />
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.header}
      >
        <View>
          <Text style={styles.textHeader}>Hoạt động</Text>
        </View>
      </KeyboardAvoidingView>
      {/* Content */}

      {data.length == 0 ? (
        <View style={styles.wrapNoNoti}>
          <BlankNoti />
          <Text style={styles.messageNoNoti}>Hiện chưa có thông báo !</Text>
        </View>
      ) : (
        <FlatList
          contentContainerStyle={styles.wrapFlatList}
          showsVerticalScrollIndicator={false}
          data={data}
          renderItem={myRenderItem}
          numColumns={1}
          keyExtractor={(item) => item.notification_id}
          ListHeaderComponent={
            <View>
              <View style={[styles.wrapOr]}>
                <View style={styles.line} />
                <View>
                  <Text style={styles.joined}>CÁC LỚP BẠN ĐÃ THAM GIA</Text>
                </View>
                <View style={styles.line} />
              </View>
            </View>
          }
        />
      )}
    </SafeAreaView>
  );
};

export default NotificationsScreen;

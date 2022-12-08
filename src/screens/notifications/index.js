import {
  View,
  Text,
  SafeAreaView,
  KeyboardAvoidingView,
  StatusBar,
  FlatList,
} from "react-native";
import React, { useState, useEffect } from "react";
import styles from "./style";
import AsyncStorage from "@react-native-async-storage/async-storage";
import colors from "../../../contains/colors";
import NotiCard from "../../components/NotiCard";
import Spinner from "react-native-loading-spinner-overlay";
import {
  getIndieNotificationInbox,
  deleteIndieNotificationInbox,
} from "native-notify";

const NotificationsScreen = (props) => {
  //State
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [userId, setUserId] = useState('none');
  AsyncStorage.getItem("userId").then((result) => {
    setUserId(result);
    console.log("user id in notif" + userId);
  });

  const onRefreshData = async () => {
    let notifications = await getIndieNotificationInbox(
      userId,
      5184,
      "JScIpkViaeDrlzwDvEdXdh"
    );
    console.log("notifications: ", notifications);
    setData(notifications);
    setLoading(false);
  };

  const myRenderItem = ({ item }) => (
    <NotiCard
      _id={item.notification_id}
      title={item.title}
      message={item.message}
      navigation={props.navigation}
    />
  );

  //useEffect
  useEffect(() => {
    onRefreshData();
  }, []);

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
    </SafeAreaView>
  );
};

export default NotificationsScreen;

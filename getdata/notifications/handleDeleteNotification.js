import { ToastAndroid } from "react-native";
import { deleteIndieNotificationInbox } from "native-notify";
import { configNotify } from "../../contains/common";
const handleDeleteNotification = async (subID, notificationId) => {
    let notifications = await deleteIndieNotificationInbox(
      subID,
      notificationId,
      configNotify.appId,
      configNotify.appToken
    );
    console.log("notifications: ", notifications);
    ToastAndroid.show("Xóa thông báo thành công", ToastAndroid.SHORT);
};

module.exports = handleDeleteNotification;

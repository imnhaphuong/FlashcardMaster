import axios from "axios";
import { configNotify } from "../../contains/common";

const indiePushNotifications = async (subID, sender, title, message, jcode) => {
  if (jcode != undefined || jcode != null || jcode != "") {
    axios.post(`https://app.nativenotify.com/api/indie/notification`, {
      subID: subID,
      appId: configNotify.appId,
      appToken: configNotify.appToken,
      title: title,
      message: message,
      pushData: `{"sender" : "${sender}",
                "jcode":"${jcode}"}`,
    });
    console.log("push noti " + title + `, jcode ${jcode}`);
  } else {
    axios.post(`https://app.nativenotify.com/api/indie/notification`, {
      subID: subID,
      appId: configNotify.appId,
      appToken: configNotify.appToken,
      title: title,
      message: message,
      pushData: `{"sender" : "${sender}"}`,
    });
    console.log("push noti " + title);
  }
};
module.exports = indiePushNotifications;

import axios from "axios";
import { configNotify } from "../../contains/common";
const groupPushNotifications = async (subIDs, title, message, jcode, img) => {
  if (jcode != undefined || jcode != null || jcode != "") {
    const imgLink = img ? img : "https://cdn-icons-png.flaticon.com/512/891/891448.png";
    console.log('my jcode ', jcode);
    axios.post(`https://app.nativenotify.com/api/indie/group/notification`, {
      subIDs: subIDs,
      appId: configNotify.appId,
      appToken: configNotify.appToken,
      title: title,
      message: message,
      pushData: `{"img" : "${imgLink}",
      "jcode":"${jcode}"}`,
    });
    console.log("push gr " + subIDs + `, jcode ${jcode}`);
  } else {
    const imgLink = img
      ? img
      : "https://cdn-icons-png.flaticon.com/512/891/891448.png";
    axios.post(`https://app.nativenotify.com/api/indie/group/notification`, {
      subIDs: subIDs,
      appId: configNotify.appId,
      appToken: configNotify.appToken,
      title: title,
      message: message,
      pushData: `{"img" : "${imgLink}"}`,
    });
    console.log("push gr " + subIDs);
  }
};
module.exports = groupPushNotifications;

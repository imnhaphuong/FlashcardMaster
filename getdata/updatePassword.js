import axios from "axios";

export const updatePassword = async (email ,oldPassword, newPassword) => {
  var uri = "http://10.0.2.2:3000/api/users/changePassword";
  const result = await axios.post(uri, {
    email: email,
    oldPassword: oldPassword,
    newPassword: newPassword
  })
  return result.data;
};
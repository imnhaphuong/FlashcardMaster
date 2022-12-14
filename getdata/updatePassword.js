import axios from "axios";

export const updatePassword = async (email ,oldPassword, newPassword) => {
  var uri = "https://flashcard-master.vercel.app/api/users/changePassword";
  const result = await axios.post(uri, {
    email: email,
    oldPassword: oldPassword,
    newPassword: newPassword
  })
  return result.data;
};
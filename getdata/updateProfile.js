import axios from "axios";

export const updateFullname = async (id ,fullname) => {
  var uri = "https://flashcard-master.vercel.app/api/users/updateFullname";
  const result = await axios.post(uri, {
    Userid: id,
    fullname: fullname,
  })
  return result.data;
};
export const updateEmail = async (id, email) => {
  var uri = "https://flashcard-master.vercel.app/api/users/updateEmail";
  const result = await axios.post(uri, {
    userId: id,
    email: email,
  })
  return result.data;
};
export const updateAvatar = async (id ,avatar) => {
  var uri = "https://flashcard-master.vercel.app/api/users/updateAvatar";
  const result = await axios.post(uri, {
    Userid: id,
    avatar: avatar,
  })
  return result.data;
};

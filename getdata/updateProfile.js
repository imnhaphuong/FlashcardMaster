import axios from "axios";

export const updateProfile = async (id, email ,fullname) => {
  var uri = "http://10.0.2.2:3000/api/users/updateProfile";
  const result = await axios.post(uri, {
    id: id,
    email: email,
    fullname: fullname,
  })
  return result.data;
};
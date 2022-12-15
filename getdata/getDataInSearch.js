import axios from "axios";

export const getUnitsSearch = async (keyword) => {
  var uri = "https://flashcard-master.vercel.app/api/units/keyword";
  const result = await axios.post(uri, {
    keyword: keyword
  })
  return result.data;
};
export const getClassesSearch = async (keyword) => {
  var uri = "https://flashcard-master.vercel.app/api/classes/keyword";
  const result = await axios.post(uri, {
    keyword: keyword
  })
  return result.data;
};
export const getUsersSearch = async (keyword) => {
  var uri = "https://flashcard-master.vercel.app/api/users/keyword";
  const result = await axios.post(uri, {
    keyword: keyword
  })
  console.log("USER", result.data);
  return result.data
};
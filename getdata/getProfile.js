import axios from "axios";

export const getUnitsCreated = async (creatorId) => {
  console.log("ID", creatorId);
  var uri = "https://flashcard-master.vercel.app/api/units/created";
  const result = await axios.post(uri, {
    creator: creatorId
  })
  return result.data;
};
export const getClassesCreated = async (creatorId) => {
  var uri = "https://flashcard-master.vercel.app/api/classes/created";
  const result = await axios.post(uri, {
    creator: creatorId
  })
  return result.data;
};
export const getInsigniaesBought = async (userID) => {
  var uri = "https://flashcard-master.vercel.app/api/users/id";
  const result = await axios.post(uri, {
    id: userID
  })
  console.log(result.data);
  return result.data.insignia;
};


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

// export const getUnitsCreatedSearch = async ( setData, userID) => {
//   fetch("https://flashcard-master.vercel.app/api/units/created", {
//     method: "post",
//     headers: {
//       "Content-Type": "application/json",
//       Accept: "application/json",
//     },
//     body: JSON.stringify({
//       creator: userID,
//     }),
//   })
//     .then((res) => res.json())
//     .then((resJson) => {
//       if (resJson[0]) {
//         setData(resJson[0]);
//       } else {
//         setData([]);
//       }
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// };

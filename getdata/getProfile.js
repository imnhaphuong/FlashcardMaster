import  axios  from "axios";

export const getUnitsCreated = async (creatorId) => {
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
// const getInsigniaesBought = async (userID) => {
//   var fetch = "https://flashcard-master.vercel.app/api/users/id";

//   fetch(fetch, {
//     method: "post",
//     headers: {
//       "Content-Type": "application/json",
//       "Accept": "application/json",
//     },
//     body: JSON.stringify({
//       creator: userID,
//     }),
//   })
//     .then((res) => res.json())
//     .then((resJson) => {
//       return resJson;
//     })
//     .catch((error) => {
//       console.log(error);
//       return undefined
//     });
// };

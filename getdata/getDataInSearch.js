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


// const getDataInSearch = async (setdata, selectedIndex, keyword) => {
//   if (selectedIndex == 0) {
//     var uri = "https://flashcard-master.vercel.app/api/units/search/" ;
//   }
//   if (selectedIndex == 1) {
//     var uri = "https://flashcard-master.vercel.app/api/classes/search/" ;
//   }
//   else{
//     var uri = "https://flashcard-master.vercel.app/api/users/search/" ;
//   }
//     fetch(uri + keyword, {
//       method: "get",
//       headers: {
//         "Content-Type": "application/json",
//         "Accept":  "application/json",
//       },
//     })
//       .then((res) => res.json())
//       .then((resJson) => {
//         console.log("Search")
//         setdata(resJson)
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };

//   module.exports = getDataInSearch;
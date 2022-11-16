const getAllTopics = async (setData) => {
    fetch("http://192.168.43.158:3000/api/topics", {
      method: "get",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((resJson) => {
        setData(resJson);
      })
      .catch((error) => {
        console.log("erorrrr",error);
      });
  };
  
  module.exports = getAllTopics;
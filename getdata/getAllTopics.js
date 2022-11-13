const getAllTopics = async (setData) => {
    fetch("https://flashcard-master.vercel.app/api/topics", {
      method: "get",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((resJson) => {
        setData(resJson);
        console.log("datatopic")
      })
      .catch((error) => {
        console.log(error);
        console.log("erorrrr")
      });
  };
  
  module.exports = getAllTopics;
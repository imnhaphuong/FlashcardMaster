const getTopicById = async (setData, _id) => {
    fetch("http://flashcard-master.vercel.app/api/topics/" + _id, {
      method: "get",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((resJson) => {
        setData(resJson);
        setLabelTopic()
      })
      .catch((error) => {
        console.log(error);
        console.log("erorrrr")
      });
  };
  
  module.exports = getTopicById;
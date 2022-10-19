const getData = async (setdata) => {
  fetch("http://flashcard-master.vercel.app/api/classes", {
    method: "get",
    headers: {
      "Content-Type": "application/json",
      "Accept":  "application/json",
    }
  })
    .then((res) => res.json())
    .then((resJson) => {
      setdata(resJson)
    })
    .catch((error) => {
      console.log(error);
    });
};

module.exports = getData;

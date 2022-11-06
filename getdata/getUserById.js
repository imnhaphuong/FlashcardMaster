const getUserByID = async (setdata, _id) => {
  fetch("https://flashcard-master.vercel.app/api/users/id", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      _id: _id,
    }),
  })
    .then((res) => res.json())
    .then((resJson) => {
      if (resJson.hasOwnProperty("error") == true) {
        setdata({
          fullname: "not found",
        });
      } else setdata(resJson);
    })
    .catch((error) => {
      console.log(error);
      setdata({
        fullname: "not found",
      });
    });
};
module.exports = getUserByID;

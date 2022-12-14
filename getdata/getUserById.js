const getUserByID = async (setdata, _id) => {
  fetch("https://flashcard-master.vercel.app/api/users/id", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      id: _id,
    }),
  })
    .then((res) => res.json())
    .then((resJson) => {
      setdata(resJson);
    })
    .catch((error) => {
      console.log('Has error ', error);
    });
};
module.exports = getUserByID;

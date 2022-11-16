const getUnitById = async (_id, setData, setLoading) => {
  fetch("https://flashcard-master.vercel.app/api/units/id", {
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
      setData(resJson);
      setLoading(false);
    })
    .catch((error) => {
      console.log(error);
    });
};

module.exports = getUnitById;

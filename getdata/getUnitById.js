const getUnitById = async (_id, setData, setLoading) => {
  await fetch("http://192.168.43.158:3000/api/units/id", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
    body: JSON.stringify({
      id: _id,
    }),
  })
    .then((res) => res.json())
    .then((resJson) => {
      setData(
        resJson
      );
      console.log("resJson", resJson);
      setLoading(false);
    })
    .catch((error) => {
      console.log(error);
    });
};

module.exports = getUnitById;

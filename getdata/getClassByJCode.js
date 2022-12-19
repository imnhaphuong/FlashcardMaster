const getClassByJCode = async (_jcode, setData, setLoading) => {
  fetch("http://flashcard-master.vercel.app/api/classes/", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      jcode: _jcode,
    }),
  })
    .then((res) => res.json())
    .then((resJson) => {
      if (resJson[0]) {
        setData(resJson[0]);
      } else {
        setData([]);
      }
      setLoading(false);
    })
    .catch((error) => {
      console.log('Has error' , error);
    });
};

module.exports = getClassByJCode;

const getUnitByName = async (setdata) => {
    fetch("https://flashcard-master.vercel.app/api/units/search/keyword?", {
      method: "get",
      headers: {
        "Content-Type": "application/json",
        "Accept":  "application/json",
      },
    })
      .then((res) => res.json())
      .then((resJson) => {
        console.log(resJson)
        setdata(resJson)
      })
      .catch((error) => {
        console.log(error);
      });
  };

  module.exports = getUnitByName;
const addClassToUnit = async (id , classId, setLoading) => {
  fetch("https://flashcard-master.vercel.app/api/units/add", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      id: id,
      class: classId,
    }),
  })
    .then((res) => res.json())
    .then((resJson) => {
      if (typeof setLoading === "function") {
        setLoading(false);
      }
    })
    .catch((error) => {
      console.log(error);
    });
};

module.exports = addClassToUnit;

const createUnitInClass = async (id , unitId, setLoading) => {
    fetch("https://flashcard-master.vercel.app/api/classes/addunit", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        id: id,
        unit: unitId,
      }),
    })
      .then((res) => res.json())
      .then((resJson) => {
        if (typeof setLoading === "function") {
          setLoading(false);
        }
        console.log(`created unit in class ${id}`);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  
  module.exports = createUnitInClass;
  
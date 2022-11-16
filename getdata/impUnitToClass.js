const impUnitToClass = async (id , units, setLoading) => {
    fetch("https://flashcard-master.vercel.app/api/classes/imp", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        id: id,
        units: units,
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
  
  module.exports = impUnitToClass;
  
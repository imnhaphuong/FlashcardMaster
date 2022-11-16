const getAllClasses = async (userId, setData, setLoading) => {
    fetch("https://flashcard-master.vercel.app/api/units/created", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body : JSON.stringify({
        creator : userId
      })
    })
      .then((res) => res.json())
      .then((resJson) => {
        setData(resJson);
        if (typeof setLoading === "function") {
          setLoading(false);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  
  module.exports = getAllClasses;
  
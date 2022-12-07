const getALLInsignia = async (setdata, setLoading) => {
    fetch("https://flashcard-master.vercel.app/api/insigniaes", {
      method: "get",
      headers: {
        "Content-Type": "application/json",
        "Accept":  "application/json",
      },
    })
      .then((res) => res.json())
      .then((resJson) => {
        setdata(resJson)
        if (typeof setLoading === "function") {
          setLoading(false);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  module.exports = getALLInsignia;
const getClassById = async (setData, _id, setLoading) => {
    fetch("http://flashcard-master.vercel.app/api/classes/", {
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
        setData(resJson);
        setLoading(false)
      })
      .catch((error) => {
        console.log(error);
      });
  };
  
  module.exports = getClassById;
  
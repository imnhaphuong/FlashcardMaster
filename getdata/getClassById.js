const getClassById = async (setdata, _id) => {
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
        setdata(resJson);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  
  module.exports = getClassById;
  
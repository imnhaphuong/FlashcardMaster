const getDataInSearch = async (setdata, selectedIndex, keyword) => {
  if (selectedIndex == 0) {
    var fetch = "https://flashcard-master.vercel.app/api/units/search" ;
  }
  if (selectedIndex == 1) {
    var fetch = "https://flashcard-master.vercel.app/api/classes/search" ;
  }
  else{
    var fetch = "https://flashcard-master.vercel.app/api/users/search" ;
  }
    fetch(fetch + "/" + keyword, {
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

  module.exports = getDataInSearch;
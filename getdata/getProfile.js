const getProfile = async (setdata, selectedIndex) => {
    if (selectedIndex == 0) {
        var fetch = "https://flashcard-master.vercel.app/api/units" ;
      }
      if (selectedIndex == 1) {
        var fetch = "https://flashcard-master.vercel.app/api/classes" ;
      }
      else{
        var fetch = "https://flashcard-master.vercel.app/api/users/" ;
      }
        fetch(fetch, {
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

module.exports = getProfile;
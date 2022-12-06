const getProfile = async (setdata, selectedIndex, _id) => {
    if (selectedIndex == 0) {
        var fetch = "https://flashcard-master.vercel.app/api/units/created" ;
      }
      if (selectedIndex == 1) {
        var fetch = "https://flashcard-master.vercel.app/api/units/created" ;
      }
      else{
        var fetch = "https://flashcard-master.vercel.app/api/users/id" ;
      }
        fetch(fetch, {
          method: "post",
          headers: {
            "Content-Type": "application/json",
            "Accept":  "application/json",
          },
          body: JSON.stringify({
            id: _id,
          }),
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
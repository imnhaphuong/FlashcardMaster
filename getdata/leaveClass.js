const leaveClass = async (id, memberId, setIsJoined) => {
  fetch("https://flashcard-master.vercel.app/api/classes/kick", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      id: id,
      member: memberId,
    }),
  })
    .then((res) => res.json())
    .then((resJson) => {
      console.log('class ' +id + " & rm member " + memberId);
      if (typeof setIsJoined === "function") {
        setIsJoined(false);
      }
      console.log('kicked ', JSON.stringify(resJson));
    })
    .catch((error) => {
      console.log(error);
    });
};

module.exports = leaveClass;

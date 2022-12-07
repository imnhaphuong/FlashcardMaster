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
      if (typeof setIsJoined === "function") {
        console.log(id + " & " + memberId);
        setIsJoined(false);
      }
    })
    .catch((error) => {
      console.log(error);
    });
};

module.exports = leaveClass;

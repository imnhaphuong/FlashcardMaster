const joinClass = async (id, memberId, setIsJoined) => {
  fetch("https://flashcard-master.vercel.app/api/classes/join", {
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
        setIsJoined(true);
      }
    })
    .catch((error) => {
      console.log(error);
    });
};

module.exports = joinClass;

import axios from "axios";

export const buyInsignia = async (userId, insigniaId) => {
    console.log("ALOOOOOOO",userId, insigniaId );
    var uri = "https://flashcard-master.vercel.app/api/users/buyInsignia";
    const result = await axios.post(uri, {
        userId: userId,
        insigniaId: insigniaId
    })
    return result.data;
};
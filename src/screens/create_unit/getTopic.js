const getTopic = async (items,setItems) => {
    try {
        const url = "http://192.168.43.158:3000/api/topics/";
        // const url ="https://flashcard-master.vercel.app/api/users/id";
        await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
        }).then(res => res.json()
        ).then(data => {
            data.map((item, i) => {
                items.push({ label: item.name, value: item._id });
                setItems([...items])
            })
        });
    } catch (err) {

        console.log(err);
    }
}
module.exports = getTopic;
const getTopic = async (items,setItems) => {
    try {
        const url = "https://flashcard-master.vercel.app/api/topics/";
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
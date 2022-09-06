import React, { useEffect, useState } from "react";

const tabs = ["posts", "comments", "albums"];

const ContentTT = () => {
    const [type, setType] = useState("posts");
    const [title, setTitle] = useState("");
    const [jsonApi, setJsonApi] = useState([]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then((res) => res.json())
            .then((jsonApi) => {
                setJsonApi(jsonApi);
            });
        console.log(type);
    }, [type]);

    return (
        <div>
            {tabs.map((tab) => (
                <button key={tab} onClick={(e) => setType(tab)}>
                    {tab}
                </button>
            ))}
            <input value={title} onChange={(e) => setTitle(e.target.value)} />
            <ul>
                {jsonApi.map((item) => (
                    <li key={item.id}>{item.title || item.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default ContentTT;

import React, { useEffect, useState } from "react";

const tabs = ["posts", "comments", "albums"];

const ContentTT = () => {
    const [type, setType] = useState("posts");
    const [title, setTitle] = useState("");
    const [jsonApi, setJsonApi] = useState([]);

    const [showGoToTop, setShowGoToTop] = useState(false);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then((res) => res.json())
            .then((jsonApi) => {
                setJsonApi(jsonApi);
            });
        console.log(type);
    }, [type]);

    useEffect(() => {
        const handleScroll = () => {
            window.scrollY > 200 ? setShowGoToTop(true) : setShowGoToTop(false);
        };

        window.addEventListener("scroll", handleScroll);
    }, []);

    return (
        <div>
            {tabs.map((tab) => (
                <button
                    key={tab}
                    onClick={(e) => setType(tab)}
                    style={
                        tab === type
                            ? {
                                  color: "white",
                                  background: "black",
                              }
                            : {}
                    }
                >
                    {tab}
                </button>
            ))}
            <input value={title} onChange={(e) => setTitle(e.target.value)} />
            <ul>
                {jsonApi.map((item) => (
                    <li key={item.id}>{item.title || item.name}</li>
                ))}
            </ul>
            {showGoToTop && (
                <button style={{ position: "fixed", right: 20, bottom: 20 }}>
                    Go to top
                </button>
            )}
        </div>
    );
};

export default ContentTT;

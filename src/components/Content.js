import React, { useEffect, useState } from "react";

/**
 * 1. Update DOM
 * 2. Call API
 * 3. Listen DOM events
 *      - Scroll
 *      - Resize
 * 4. Cleanup
 *      - Remove listener/ Unsubscribe
 *      - Clear timer
 */

/**
 * 1. no deps: Callback luon duoc goi sau khi component mounted
 * 2. []: Callback chi duoc goi 1 lan sau khi component mounted
 * 3. [deps]: Callback chi duoc goi lai moi khi deps thay doi
 */

const tabs = ["posts", "comments", "albums"];

const Content = () => {
    const [title, setTitle] = useState("");
    const [posts, setPosts] = useState([]);
    const [type, setType] = useState("posts");

    // console.log(type);

    // useEffect(callback, [deps])
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then((res) => res.json())
            .then((posts) => {
                setPosts(posts);
            });

        console.log(">>> title changed");
    }, [type]);

    return (
        <div>
            {tabs.map((tab) => (
                <button
                    key={tab}
                    onClick={() => setType(tab)}
                    style={
                        type === tab
                            ? { color: "#fff", background: "#333" }
                            : {}
                    }
                >
                    {tab}
                </button>
            ))}

            <input value={title} onChange={(e) => setTitle(e.target.value)} />

            <ul>
                {posts.map((post) => (
                    <li key={post.id}>{post.title || post.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default Content;

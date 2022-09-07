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

/**
 * 1. Callback luon duoc goi sau khi component mounted
 * 2. Cleanup function luon duoc goi truoc khi component unmounted
 */

const tabs = ["posts", "comments", "albums"];

const Content = () => {
    const [title, setTitle] = useState("");
    const [posts, setPosts] = useState([]);
    const [type, setType] = useState("posts");

    const [showGoToTop, setShowGoToTop] = useState(false);

    // console.log(type);

    // useEffect(callback, [deps])
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then((res) => res.json())
            .then((posts) => {
                setPosts(posts);
            });

        // console.log(">>> title changed");
    }, [type]);

    useEffect(() => {
        const handleScroll = () => {
            window.scrollY > 200 ? setShowGoToTop(true) : setShowGoToTop(false);
        };

        window.addEventListener("scroll", handleScroll);
        console.log("addEventListener");

        // cleanup function
        return () => {
            window.removeEventListener("scroll", handleScroll);
            console.log("removeEventListener");
        };
    }, []);

    /* ----------------------- */
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
        };

        window.addEventListener("resize", handleResize);

        // clean up function
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    // --------------------------------- //
    const [count, setCount] = useState(1);
    useEffect(() => {
        console.log(`Mounted or Re-render lan ${count}`);

        // cleanup function
        return () => {
            console.log(`Cleanup lan ${count}`);
        };
    }, [count]);

    return (
        <div>
            {/* <div>
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

                <input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />

                <ul>
                    {posts.map((post) => (
                        <li key={post.id}>{post.title || post.name}</li>
                    ))}
                </ul>

                {showGoToTop && (
                    <button
                        style={{ position: "fixed", right: 20, bottom: 20 }}
                    >
                        Go to top
                    </button>
                )}
            </div> */}

            {/* <h2>{width}</h2> */}

            <h2>{count}</h2>
            <button onClick={() => setCount(count + 1)}>Click me!</button>
        </div>
    );
};

export default Content;

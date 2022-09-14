import React, { useRef, useState, useEffect } from "react";

const HooksUseRef = () => {
    const [count, setCount] = useState(60);

    // const ref = useRef(99); // return object
    // console.log(ref.current);

    const timerId = useRef();
    const prevCount = useRef();
    const h1Ref = useRef();

    useEffect(() => {
        prevCount.current = count;
    }, [count]);

    useEffect(() => {
        console.log(h1Ref.current);
    });

    const handleStart = () => {
        timerId.current = setInterval(() => {
            // ref.current = Math.random();

            setCount((prev) => prev - 1);
        }, 1000);

        console.log("Start -> ", timerId);
    };

    const handleStop = () => {
        clearInterval(timerId);

        console.log("Stop ->", timerId);
    };

    console.log(count, prevCount.current);

    return (
        <div>
            <h1 ref={h1Ref}>{count}</h1>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
        </div>
    );
};

export default HooksUseRef;

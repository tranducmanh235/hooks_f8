import React, { useEffect, useState } from "react";

const Timer = () => {
    const [countdown, setCountdown] = useState(180);

    useEffect(() => {
        const timerId = setInterval(() => {
            setCountdown((prevState) => prevState - 1);
            console.log("countdown...");
        }, 1000);

        // setTimeout(() => {
        //     setCountdown((prevState) => prevState - 1);
        // }, 1000);

        return () => {
            clearInterval(timerId);
        };
    }, []);

    return (
        <div>
            <h2>{countdown}</h2>
        </div>
    );
};

export default Timer;

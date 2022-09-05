import React, { useState } from "react";

const orders = [100, 200, 300];

const HooksUseState = () => {
    const [info, setInfo] = useState({
        name: "Nguyen Van A",
        age: 18,
        address: "Ha Noi, VN",
    });

    const handleUpdate = () => {
        // setInfo({
        //     ...info,
        //     bio: "yeu mau hong",
        // });

        setInfo((prev) => {
            // logic

            return {
                ...prev,
                bio: "Yeu mau hong ^^",
            };
        });
    };

    const [counter, setCounter] = useState(() => {
        const total = orders.reduce((total, cur) => total + cur);

        console.log(total);
        return total;
    });

    const handleIncrease = () => {
        setCounter(counter + 1); // case 1
        // setCounter((prevState) => prevState + 1); // case 2: change
    };

    // console.log("re-render");

    return (
        <div>
            {/* <h2>{counter}</h2>
            <button onClick={handleIncrease}>Increase</button> */}

            <h2>{JSON.stringify(info)}</h2>
            <button onClick={handleUpdate}>Update</button>
        </div>
    );
};

export default HooksUseState;

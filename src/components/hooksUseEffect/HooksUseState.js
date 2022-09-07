import React, { useState } from "react";

const orders = [100, 200, 300];
const gifts = ["CPU i9", "RAM 32GB RGB", "RGB Keyboard"];

// Response from API
const courses = [
    {
        id: 1,
        name: "HTML, CSS",
    },
    {
        id: 2,
        name: "JavaScript",
    },
    {
        id: 3,
        name: "ReactJS",
    },
];

const HooksUseState = () => {
    /**
     * component duoc re-render sau khi 'setState'
     * Initial state chi dung cho lan dau
     * Set state voi callback?
     * Initial state voi callback?
     * Set state la thay the state bang gia tri moi
     */

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

    //
    const [gift, setGift] = useState();

    const randomGift = () => {
        const index = Math.floor(Math.random() * gifts.length);

        setGift(gifts[index]);
    };

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const handleRegister = () => {
        // call API
        console.log({
            name,
            email,
        });
    };

    //////////////////
    const [checkedRadio, setCheckedRadio] = useState();
    console.log(checkedRadio);

    const handleSubmit = () => {
        // call api
        console.log({ id: checked });
    };

    //////////////////////
    const [checked, setChecked] = useState([]);

    const handleCheck = (id) => {
        setChecked((prev) => {
            const isChecked = checked.includes(id);
            if (isChecked) {
                return checked.filter((item) => item !== id);
            } else {
                return [...prev, id];
            }
        });
    };
    console.log(checked);

    return (
        <div style={{ padding: "30px" }}>
            <h2>{counter}</h2>
            <button onClick={handleIncrease}>Increase</button>
            <hr />

            <h2>{JSON.stringify(info)}</h2>
            <button onClick={handleUpdate}>Update</button>
            <hr />

            <h1>{gift || "Chua co phan thuong"}</h1>
            <button style={{ padding: "5px" }} onClick={randomGift}>
                Lay thuong
            </button>
            <hr />

            <input onChange={(e) => setName(e.target.value)} value={name} />
            <input onChange={(e) => setEmail(e.target.value)} value={email} />
            <button onClick={handleRegister}>Register</button>
            <hr />

            {courses.map((course) => (
                <div key={course.id}>
                    <input
                        type="radio"
                        checked={checkedRadio === course.id}
                        onChange={() => setCheckedRadio(course.id)}
                    />
                    {course.name}
                </div>
            ))}
            <hr />

            {courses.map((course) => (
                <div key={course.id}>
                    <input
                        type="checkbox"
                        checked={checked.includes(course.id)}
                        onChange={() => handleCheck(course.id)}
                    />
                    {course.name}
                </div>
            ))}
            <button onClick={handleSubmit}>Register</button>
        </div>
    );
};

export default HooksUseState;

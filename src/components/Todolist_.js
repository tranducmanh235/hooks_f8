import React, { useState } from "react";

const Todolist_ = () => {
    const [job, setJob] = useState("");
    const [jobs, setJobs] = useState(() => {
        const storageJobs = JSON.parse(localStorage.getItem("jobs"));

        return storageJobs ?? [];
    });

    const handleAdd = () => {
        setJobs((prev) => {
            const newJobs = [...prev, job];

            // save to localstorage
            const jsonJobs = JSON.stringify(newJobs);
            localStorage.setItem("jobs", jsonJobs);

            return newJobs;
        });
        setJob("");
    };

    return (
        <div>
            <input value={job} onChange={(e) => setJob(e.target.value)} />
            <button onClick={handleAdd}>Add</button>

            <ul>
                {jobs.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
};

export default Todolist_;

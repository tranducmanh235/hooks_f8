import React, { useReducer, useRef } from "react";

// 1. init state
const initState = {
    job: "",
    jobs: [],
};

// 2. actions
const SET_JOB = "set_job";
const ADD_JOB = "add_job";
const DELETE_JOB = "delete_job";

const setJob = (payload) => {
    return {
        type: SET_JOB,
        payload,
    };
};

const addJob = (payload) => {
    return {
        type: ADD_JOB,
        payload,
    };
};

const deleteJob = (payload) => {
    return {
        type: DELETE_JOB,
        payload,
    };
};

// 3. Reducer
const reducer = (state, action) => {
    let newState;

    switch (action.type) {
        case SET_JOB:
            newState = {
                ...state,
                job: action.payload,
            };
            break;

        case ADD_JOB:
            newState = {
                ...state,
                jobs: [...state.jobs, action.payload],
            };
            break;

        case DELETE_JOB:
            const newJobs = [...state.jobs]; // copy

            newJobs.splice(action.payload, 1);

            newState = {
                ...state,
                jobs: newJobs,
            };
            console.log(newJobs);
            break;

        default:
            break;
    }

    return newState;
};

// 4. Dispatch

const TodoAppTT = () => {
    const [state, dispatch] = useReducer(reducer, initState);
    const { job, jobs } = state;

    const inputRef = useRef();

    const handleAdd = () => {
        dispatch(addJob(job));
        dispatch(setJob(""));

        inputRef.current.focus();
    };

    return (
        <div>
            <h2>Todo:</h2>
            <input
                ref={inputRef}
                value={job}
                onChange={(e) => {
                    dispatch(setJob(e.target.value));
                }}
                placeholder="Enter todo ..."
            />
            <button onClick={handleAdd}>Add</button>
            <ul>
                {jobs.map((job, index) => (
                    <li key={index}>
                        {job}{" "}
                        <span
                            onClick={() => {
                                dispatch(deleteJob(index));
                            }}
                        >
                            &times;
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoAppTT;

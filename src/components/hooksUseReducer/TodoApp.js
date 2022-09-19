import React, { useReducer, useRef } from "react";

/** useReducer
 * 1. Init state
 * 2. Actions
 * 3. Reducer
 * 4. Dispatch
 */

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

// console.log(setJob("rua bat"));

// 3. reducer
const reducer = (state, action) => {
    console.log("action: ", action);
    console.log("prev state: ", state);

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
            const newJobs = [...state.jobs]; // tranh sua mang cu

            newJobs.splice(action.payload, 1);

            newState = {
                ...state,
                jobs: newJobs,
            };
            break;

        default:
            throw new Error("Invalid action.");
    }

    console.log("new state: ", newState);

    return newState;
};

const TodoApp = () => {
    const [state, dispatch] = useReducer(reducer, initState);
    const { job, jobs } = state;

    const inputRef = useRef();

    // console.log(state);

    const handleSubmit = () => {
        dispatch(addJob(job));
        dispatch(setJob(""));

        inputRef.current.focus();
    };

    return (
        <div>
            <h3>Todo</h3>
            <input
                ref={inputRef}
                value={job}
                onChange={(e) => {
                    dispatch(setJob(e.target.value));
                }}
                placeholder="Enter todo..."
            />
            <button onClick={handleSubmit}>Add</button>
            <ul>
                {jobs.map((job, index) => (
                    <li key={index}>
                        {job}
                        <span onClick={() => dispatch(deleteJob(index))}>
                            &times;
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoApp;

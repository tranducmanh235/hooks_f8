import React, { useState, useReducer } from "react";

/**
 * useReducer lam duoc <--> useState cung lam duoc
 * useReducer: khi data phuc tap
 * -------------------------------------------
 * useState: khi data don gian
 */

/** useState
 * - init state: 0
 * - actions: Up (state + 1) / Down (state - 1)
 *
 *
 ** useReducer
 * - init state: 0
 * - actions: Up (state + 1) / Down (state - 1)
 * - reducer
 * - dispatch (kich hoat 1 action)
 */

const initState = 0;

// actions
const UP_ACTION = "up";
const DOWN_ACTION = "down";

// reducer
const reducer = (state, action) => {
    console.log("reducer running ... ");
    switch (action) {
        case UP_ACTION:
            return state + 1;
        // break;

        case DOWN_ACTION:
            return state - 1;
        // break;

        default:
            throw new Error("Invalid action");
        // break;
    }
};

const HooksUseReducer = () => {
    const [count, dispatch] = useReducer(reducer, initState);

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => dispatch(DOWN_ACTION)}>Down</button>
            <button onClick={() => dispatch(UP_ACTION)}>Up</button>
        </div>
    );
};

export default HooksUseReducer;

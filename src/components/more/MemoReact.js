import React, { useState, memo } from "react";
import ContentMemo from "./ContentMemo";

/**
 * ---------------- React: Hooks, HOC, Render props ----------------
 *
 * memo() -> High Order Component (HOC): xu ly component de tranh bi re-render khong can thiet
 * useCallback()
 * */

const MemoReact = () => {
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(0);

    const increase = () => {
        setCount(count + 1);
    };

    const increase2 = () => {
        setCount2(count2 + 1);
    };

    return (
        <div>
            <ContentMemo count={count} />
            <h1>{count}</h1>
            <h1>{count2}</h1>
            <button onClick={increase}>Click me!</button>
            <button onClick={increase2}>Click me 2!</button>
        </div>
    );
};

export default MemoReact;

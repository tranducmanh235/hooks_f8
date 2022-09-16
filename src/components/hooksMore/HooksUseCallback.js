import React, { useCallback, useState } from "react";
import ContentMemo from "../more/ContentMemo";

const HooksUseCallback = () => {
    const [count, setCount] = useState(0);

    const handleIncrease = useCallback(() => {
        setCount((prevCount) => prevCount + 1);
    }, []);

    return (
        <div>
            <ContentMemo onIncrease={handleIncrease} />
            <h1>{count}</h1>
        </div>
    );
};

export default HooksUseCallback;

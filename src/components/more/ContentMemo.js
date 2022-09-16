import { memo } from "react";

// ===

function ContentMemo({ onIncrease }) {
    console.log("re-render");

    return (
        <div>
            <h2>Hello everybody! </h2>
            <button onClick={onIncrease}>Click me!</button>
        </div>
    );
}

export default memo(ContentMemo);

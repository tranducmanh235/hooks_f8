import { memo } from "react";

// ===

function ContentMemo({ count }) {
    console.log("re-render");

    return (
        <div>
            <h2>Hello everybody! {count}</h2>
        </div>
    );
}

export default memo(ContentMemo);

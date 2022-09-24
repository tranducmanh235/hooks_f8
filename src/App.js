// import { useRef } from "react";
// import Video from "./Video";

// function App() {
//     const videoRef = useRef();

//     const handlePlay = () => {
//         videoRef.current.play();
//     };

//     const handlePause = () => {
//         videoRef.current.pause();
//     };

//     return (
//         <div style={{ padding: 40, textAlign: "center" }}>
//             <Video ref={videoRef} />
//             <button onClick={handlePlay}>Play</button>
//             <button onClick={handlePause}>Pause</button>
//         </div>
//     );
// }

// export default App;

import Heading from "./CssModule/Heading";
import Paragraph from "./CssModule/Paragraph/index";
import GlobalStyles from "./CssModule/GlobalStyles";

function App() {
    return (
        <GlobalStyles>
            <div>
                <Heading />
                <Paragraph />
            </div>
            <div className="d-flex">
                <span>Item 1</span>
                <span>Item 2</span>
            </div>
        </GlobalStyles>
    );
}

export default App;

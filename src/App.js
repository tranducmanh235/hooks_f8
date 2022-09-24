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

// import Heading from "./CssModule/Heading";
// import Paragraph from "./CssModule/Paragraph/index";
// import GlobalStyles from "./CssModule/GlobalStyles";
// import Button from "./CssModule/Button/Button";

import { Routes, Route, Link } from "react-router-dom";
import HomePage from "./reactRouter/pages/Home";
import NewsPage from "./reactRouter/pages/News";
import ContactPage from "./reactRouter/pages/Contact";

function App() {
    return (
        // <GlobalStyles>
        //     {/* <div>
        //         <Heading />
        //         <Paragraph />
        //     </div>
        //     <div className="d-flex">
        //         <span>Item 1</span>
        //         <span>Item 2</span>
        //     </div> */}
        //     <div style={{ padding: "10px 32px" }}>
        //         <Button />
        //         <Button primary disabled />
        //     </div>
        // </GlobalStyles>
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/news">News</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>

            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/news" element={<NewsPage />} />
                <Route path="/contact" element={<ContactPage />} />
            </Routes>
        </div>
    );
}

export default App;

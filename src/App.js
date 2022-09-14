import "./App.css";
// import HooksUseState from "./components/hooksUseEffect/HooksUseState";
// import Todolist_ from "./components/hooksUseEffect/Todolist_";
// import Content from "./components/hooksUseEffect/Content";
import { useState } from "react";
// import Timer from "./components/hooksUseEffect/Timer";
// import PreviewAvatar from "./components/hooksUseEffect/PreviewAvatar";
// import FakeChatApp from "./components/hooksUseEffect/FakeChatApp";
// import Content from "./components/hooksMore/Content";
import HooksUseRef from "./components/hooksMore/HooksUseRef";

function App() {
    const [show, setShow] = useState(false);

    return (
        <div className="App">
            {/* <HooksUseState /> */}
            <div className="content" style={{ padding: 30 }}>
                {/* <Todolist_ /> */}
                {/* <button onClick={() => setShow(!show)}>Toggle</button>
                {show && <Content />} */}

                {/* <button onClick={() => setShow(!show)}>Toggle</button>
                {show && <Timer />} */}

                {/* <button onClick={() => setShow(!show)}>Toggle</button>
                {show && <PreviewAvatar />} */}

                {/* <button onClick={() => setShow(!show)}>Toggle</button>
                {show && <FakeChatApp />} */}

                {/* <button onClick={() => setShow(!show)}>Toggle</button>
                {show && <Content />} */}

                <button onClick={() => setShow(!show)}>Toggle</button>
                {show && <HooksUseRef />}
            </div>
        </div>
    );
}

export default App;

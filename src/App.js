import "./App.css";
import HooksUseState from "./components/HooksUseState";
import Todolist_ from "./components/Todolist_";
import Content from "./components/Content";
import { useState } from "react";

function App() {
    const [show, setShow] = useState(false);

    return (
        <div className="App">
            {/* <HooksUseState /> */}
            <div className="content" style={{ padding: 30 }}>
                {/* <Todolist_ /> */}
                <button onClick={() => setShow(!show)}>Toggle</button>
                {show && <Content />}
            </div>
        </div>
    );
}

export default App;

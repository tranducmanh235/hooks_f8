import "./App.css";
import { useState } from "react";

function App() {
    const [counter, setCounter] = useState(1);

    return (
        <div className="App">
            <h2>{counter}</h2>
        </div>
    );
}

export default App;

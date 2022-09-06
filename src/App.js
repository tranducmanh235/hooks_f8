import "./App.css";
import HooksUseState from "./components/HooksUseState";
import Todolist_ from "./components/Todolist_";

function App() {
    return (
        <div className="App">
            {/* <HooksUseState /> */}
            <div className="content">
                <Todolist_ />
            </div>
        </div>
    );
}

export default App;

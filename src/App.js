import { useStore, actions } from "./store";

function App() {
    const [state, dispatch] = useStore();
    const { todos, todoInput } = state;

    // console.log("todoInput: ", todoInput);

    const handleAdd = () => {
        dispatch(actions.addTodo(todoInput));
    };

    console.log(todos);

    return (
        <div>
            <input
                value={state.todoInput}
                placeholder="Enter todo..."
                onChange={(e) => {
                    dispatch(actions.setTodoInput(e.target.value));
                }}
            />
            <button onClick={handleAdd}>Add</button>
            {todos.map((todo, index) => (
                <li key={index}>{todo}</li>
            ))}
        </div>
    );
}

export default App;

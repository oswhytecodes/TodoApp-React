import "./index.css";
import { TodoList } from "./components/TodoList";
// import { CompletedList } from "./components/CompletedList";
import { useState, useEffect, useMemo } from "react";
import { v4 as uuidv4 } from "uuid";

export default function App() {
  // handle input
  const [value, setValue] = useState("");
  // add a todo
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todos")) || []
  );
  const [filter, setFilter] = useState("all");
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  // console.log(todos)
  const handleSubmit = (e) => {
    e.preventDefault();
    // changes the todos state
    const newTodo = { text: value, isComplete: false, id: uuidv4() };
    // localstorage to add the data
    localStorage.setItem("todos", JSON.stringify([...todos, newTodo]));
    setTodos([...todos, newTodo]);
    console.log(todos);
    setValue("");
  };

  const filteredTodo = useMemo(() => {
    let tasks = []
    switch (filter) {
      case "all":
        tasks = todos;
        break;
      case "incomplete":
        tasks =  todos.filter((task) => !task.isComplete);
        break;
      case "complete":
        tasks =  todos.filter((task) => task.isComplete);
        break;
      default:
        tasks = todos;
    }
    return tasks
  }, [todos, filter]);

  return (
    <div className="App">
      <br />
      <br />
      <br />
      {/*  INPUT */}
      <form onSubmit={handleSubmit}>
        <input
          value={value}
          type="search"
          onChange={handleChange}
          placeholder="add todo..."
        />
      </form>
      <br />
      <div
        style={{
          display: "flex",
          gap: "1em",
          width: "100%",
          justifyContent: "center",
        }}
      >
        <button onClick={() => setFilter("all")}>ALL TODOS</button>
        <button onClick={() => setFilter("incomplete")}>INCOMPLETE</button>
        <button onClick={() => setFilter("complete")}>COMPLETE</button>
      </div>
      {/* NEW TODO */}
      <div className="new-todo">
        <div>
          <TodoList
            setTodos={setTodos}
            todos={todos}
            filteredTodo={filteredTodo}
          />
        </div>
      </div>
      <br />
    </div>
  );
}

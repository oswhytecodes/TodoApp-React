import "./index.css";
import Todo from "./Todo";
import { TodoList } from "./TodoList";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { Completed } from "./Completed";

export default function App() {
  // handle input
  const [value, setValue] = useState("");
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  // add a todo
  const [todos, setTodos] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos([...todos, { text: value, isComplete: false, id: uuidv4() }]);
    setValue("");
  };
  //  delete a todo
  const toggleTodo = () => {
    setTodos(todos.map(todo => [ ...todo,  { ...todo, isComplete: true } ]))
  }
  /////////////////////////
  // local storage
  useEffect(() => {
    const todo = JSON.parse(localStorage.getItem("todos"));
    if (todo) {
      setTodos(todo);
    }
  }, []);
  useEffect(() => {
    if (todos?.length) {
      // only store the state if products exists and it's length is greater than 0
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  }, [todos]);

  return (
    <div className="App">
      <br />
      <br />
      <br />

      <form onSubmit={handleSubmit}>
        <input
          value={value}
          type="search"
          onChange={handleChange}
          placeholder="add todo..."
        />
      </form>
      <br />
      <div className="new-todo">
        <h3> NEW TODO </h3>
        <div><TodoList todos={todos} /></div>
      </div>
      <br />
      <div className="completed-todo">
        <h3> COMPLETED </h3>
      <div> <Completed todos={todos} /></div>
      </div>
    </div>
  );
}
// const todo = setTodos(todos.map(todo => todo))
// const filteredTodo = setTodos(todos.filter(el => el.id !== todo.id))

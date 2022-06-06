const Todo = (props) => {
  const { todo, todos, setTodos } = props;

  // change the isComplete state from true to false
  const toggleTodo = () => {
    const updatedTodo = todos.map((task) => {
      if (task.id === todo.id) {
        return {
          ...task,
          isComplete: !task.isComplete,
        };
      }
      return task;
    });
    //  the local storage updates
    localStorage.setItem("todos", JSON.stringify(updatedTodo));
    setTodos(updatedTodo);
  };
  //   todo is complete and removed from the UI
  const deleteTodo = () => {
    const remainingTodo = todos.filter((task) => task.id !== todo.id);
    localStorage.setItem("todos", JSON.stringify(remainingTodo));

    setTodos(remainingTodo);
  };
  return (
    <section>
      <div className="todo">
        <ul className="todo-container">
          <li className="todo-text">{todo.text}</li>
        </ul>
        <div className="todo-btns">
          <button onClick={toggleTodo} className="todo-button complete">
            <i className="fa-solid fa-check" />
          </button>

          <button onClick={deleteTodo} className="todo-button delete">
            <i className="fa-solid fa-xmark" />
          </button>
        </div>
      </div>
    </section>
  );
};
export default Todo;

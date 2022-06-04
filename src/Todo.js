const Todo = (props) => {
  const { todo, toggleTodo } = props;
  

  return (
    <section>
      <div className="todo">
        <ul className="todo-container">
          <li className="todo-text">{todo.text}</li>
        </ul>
        <div>
          {!todo.isComplete ? (
            <button
            onClick={toggleTodo}
            className="todo-button complete">
              <i className="fa-solid fa-check" />
            </button>
          ) : (
            <button className="todo-button delete">
              <i className="fa-solid fa-xmark" />
            </button>
          )}
        </div>
      </div>
    </section>
  );
};
export default Todo;

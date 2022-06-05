import Todo from "./Todo";
export const TodoList = ({ todos, setTodos, filteredTodo }) => {
  return (
    <div>
      {filteredTodo.map((todo) => (
        <Todo 
        key={todo.id} 
        setTodos={setTodos}
        todos={todos}
        todo={todo} />
      ))}
    </div>
  );
};

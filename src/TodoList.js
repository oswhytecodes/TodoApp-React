import Todo from "./Todo";
export const TodoList = ({ todos }) => {
  return (
    <div>
      {todos.map((todo) => (
        <Todo 
        key={todo.id} 
        todo={todo} />
      ))}
    </div>
  );
};


import Todo from './Todo'
export const Completed = ({ todos }) => {
  return (
    <div>
      {todos.map((todo) =>
        todo.isComplete ? <Todo /> : null
      )}
    </div>
  );
};

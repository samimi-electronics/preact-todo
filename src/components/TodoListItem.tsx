import { useTodo } from "../contexts/TodoContext";
import { Todo } from "../interfaces";
import "./TodoListItem.css";

type TodoListItemProps = {
  todo: Todo;
  children?: JSX.Element;
};

const TodoListItem = ({ todo }: TodoListItemProps) => {
  const todoContext = useTodo();

  return (
    <div id={"tli" + todo.id} className={"d-flex flex-column rounded text-dark p-4 mb-4 border bg-light mx-4 trans"} style={{zIndex: 0}}>
      <div className="mb-3">
        <div className="d-flex flex-row justify-content-between align-items-center">
          <h4 className="m-0 flex-grow-1" style={{maxWidth: '200px'}}>{todo.title}</h4>
          <div className=''>
            <button
              className="btn btn-danger btn-sm me-2"
              onClick={() => todoContext?.deleteTodo(todo.id)}
            >
              &times;
            </button>
            <button
              className="btn btn-success btn-sm"
              disabled={todo.status == 1 ? true : false}
              onClick={() => todoContext?.completeTodo(todo.id)}
            >
              &#10003;
            </button>
          </div>
        </div>
        <div className="text-muted">
          <small>
            {todo.status == 1 ? (
              <span className="text-success">Complete</span>
            ) : (
              <span className="text-danger">Pending</span>
            )}
            , {new Date(todo.created_at).toDateString()}
          </small>
          <p className="m-0"></p>
        </div>
      </div>
      <div>
        <p>{todo.description}</p>
      </div>
    </div>
  );
};

export default TodoListItem;

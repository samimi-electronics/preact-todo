import { useEffect, useState } from "preact/hooks";
import { useTodo } from "../contexts/TodoContext";
import { TodoStatus } from "../enums";
import Modal from "./Modal";
import TodoListItem from "./TodoListItem";

type AddItemFields = {
  title?: string;
  description?: string;
  status?: TodoStatus;
  created_at?: Date;
  updated_at?: Date;
};

const TodoList = () => {
  const todosContext = useTodo();

  const [showModal, setShowModal] = useState(false);
  const [addItemFields, setAddItemFields] = useState({} as AddItemFields);

  const handleAddItem = (e: Event) => {
    todosContext?.insertTodo({
      ...addItemFields,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    });
    setShowModal(false);
  };

  // useEffect(() => {
  //   // console.log("todo list render");
  // }, todosContext?.todos);

  return (
    <>
      <Modal showModal={showModal}>
        <div className="d-flex flex-row align-items-center justify-content-between px-4 py-2">
          <h2 className="pt-2">Add Todo Item</h2>
          <button
            className="fs-4 btn btn-text m-0 p-0"
            onClick={() => setShowModal(false)}
          >
            &times;
          </button>
        </div>
        <div className="d-flex flex-row px-4 py-2">
          <div className="w-100">
            <div className="mb-3">
              <label htmlFor="title" className="form-label">
                Title
              </label>
              <input
                type="text"
                className="form-control"
                id="text"
                onInput={(e: any) => {
                  setAddItemFields({
                    ...addItemFields,
                    title: e.target?.value,
                  });
                }}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="description" className="form-label">
                Description
              </label>
              <textarea
                name="description"
                className="form-control"
                id=""
                cols={30}
                rows={3}
                onInput={(e: any) => {
                  setAddItemFields({
                    ...addItemFields,
                    description: e.target?.value,
                  });
                }}
              ></textarea>
            </div>
            <div className="mb-3">
              <label htmlFor="title" className="form-label">
                Todo Status
              </label>
              <select
                class="form-select"
                id="status"
                onChange={(e: any) => {
                  setAddItemFields({
                    ...addItemFields,
                    status: e.target?.value,
                  });
                }}
              >
                <option value={-1} selected disabled>
                  Select an option
                </option>
                <option value={TodoStatus.PENDING}>Pending</option>
                <option value={TodoStatus.DONE}>Complete</option>
              </select>
            </div>
            <div className="mb-3">
              <button className="btn btn-success w-100" onClick={handleAddItem}>
                Add Item
              </button>
            </div>
          </div>
        </div>
      </Modal>
      <div className="position-sticky top-0 d-flex justify-content-center align-items-center mt-4">
        <button
          className="btn btn-outline-primary mb-3 w-50 mx-auto"
          onClick={() => setShowModal(true)}
        >
          &#43; New Todo
        </button>
      </div>
      <div style={{ maxWidth: "500px" }} className="mx-auto mt-2">
        {todosContext?.todos.map((t) => (
          <TodoListItem key={t.id} todo={t} />
        ))}
      </div>
    </>
  );
};

export default TodoList;

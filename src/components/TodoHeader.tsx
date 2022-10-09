import { useState } from "preact/hooks";
import { useTodo } from '../contexts/TodoContext';
import { TodoStatus } from '../enums';
import Modal from "./Modal";
import "./TodoHeader.css";

const TodoHeader = () => {
  const todoContext = useTodo();

  return (
    <>
      <nav
        className="shadow-sm position-sticky bg-dark top-0 py-4 bgBlur"
        style={{ zIndex: 1000, '--bs-bg-opacity': '0.1' }}
      >
        <div className="container">
          <div className="d-flex flex-row justify-content-between align-items-center">
            <h4>Todo Application Preact</h4>
          </div>
        </div>
      </nav>
    </>
  );
};

export default TodoHeader;

import { ComponentProps, createContext, JSX } from 'preact';
import { useContext, useEffect, useState } from 'preact/hooks';
import { Todo } from '../interfaces';
import { todos as todosData } from '../data/todos.json';
import { TodoStatus } from '../enums';
import { useLocalstorage } from '../hooks/useLocalstorage';

type TodoContextState = {
  todos: Todo[];
  insertTodo: (todo: Partial<Todo>) => void;
  deleteTodo: (id: number) => void;
  completeTodo: (id: number) => void;
}

const TodoContext = createContext<TodoContextState | null>(null);

export function useTodo() {
  return useContext(TodoContext);
}

const TodoContextProvider = (props: ComponentProps<any>): JSX.Element => {
  const [todos, setTodos] = useLocalstorage<Todo[]>("todos", []);

  // useEffect(() => {
  //   console.log('todos updated');
  // }, [todos]);

  const insertTodo = (todo: Partial<Todo>): void => {
    const id = todos.length + 1 as number;
    todos.push({ ...todo, id } as Todo);
    setTodos(todos);
  }


  const deleteTodo = (id: number): void  => {
    const _todos = todos.filter((t) => t.id !== id) as Todo[];
    const elem = document.querySelector(`#tli${id}`) as Element;
    elem.className += ' fadeout';
    setTimeout(() => setTodos(_todos), 500);
  }

  const completeTodo = (id: number) => {
    let todo = todos.find(t => t.id === id) as Todo;
    todo.status = TodoStatus.DONE;
    setTodos(todos.map(t => {
      if (t.id === id) return todo;
      return t;
    }));
  }

  const state: TodoContextState = {
    todos,
    insertTodo,
    deleteTodo,
    completeTodo
  };

  return (
    <TodoContext.Provider value={state}>
      { props.children }
    </TodoContext.Provider>
  );
}

export default TodoContextProvider;
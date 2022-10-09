import { useState } from 'preact/hooks'
import TodoContextProvider from './contexts/TodoContext'
import TodoList from './components/TodoList'
import TodoHeader from './components/TodoHeader'

export function App() {
  return (
    <>
      <TodoContextProvider>
          <TodoHeader />
          <TodoList />
      </TodoContextProvider>
    </>
  )
}

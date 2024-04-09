
import { useState } from 'react';
import './App.scss';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

function App() {
  const [todoList, setTodoList] = useState([
    { id: 1, title: 'Le Viet' },
    { id: 2, title: 'Le Van Viet' },
    { id: 3, title: 'Van Viet' }
  ]);

  function handleTodoClick(todo) {
    console.log(todo);
    const index = todoList.findIndex(item => item.id === todo.id);
    // nếu ko tìm thấy sẽ trả về giá trị là -1 
    if (index < 0) return;

    const newTodoList = [...todoList];
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
  }

  function handleTodoFormSubmit(formValues) {
    console.log("Form submit: ", formValues);
    // add new todo current todo list
    const newTodo = {
      id: todoList.length + 1,
      ...formValues,
    }
    const newTodoList = [...todoList];
    newTodoList.push(newTodo);
    setTodoList(newTodoList);
  }

  return (
    <div className="app">
      <h1>React Hooks - TodoList</h1>
      <TodoForm onSubmit={handleTodoFormSubmit} />
      <TodoList todos={todoList} onTodoClick={handleTodoClick} />
    </div>
  );
}

export default App;

import styles from './todo.module.css';
import { useState } from 'react';

const Todo = () => {
  const [inputValue, setInputValue] = useState('');
  const [todos, setTodos] = useState([]);
  const handleClick = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    setTodos([...todos, inputValue]);
    setInputValue('');
  }
  return (
    <div className={styles.todoContainer}>
        <h1>To Do App</h1>
        <form onSubmit={(e) => e.preventDefault()}>
            <input
                type="text"
                placeholder="Enter todo"
                onChange={(e) => setInputValue(e.target.value)}
            />
            <button type="submit" onClick={handleClick}>
                Add
            </button>
        </form>
        <div className={styles.todoListContainer}>
            <h3>Todo Lists:</h3>
            <div>
               {todos.map((item,index) => (
                 <p key={index}>{item}</p>
               ))}
            </div>
        </div>
    </div>
  );
}

export default Todo
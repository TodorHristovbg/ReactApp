import { useEffect, useState } from 'react'
import fetchtodos from './fetchtodos.js';
import fetchnames from './fetchnames.js';
import TodoContainer from './TodoContainer.jsx';


function App() {
  const [todos, setTodos]= useState([]);

  useEffect(()=> {
    fetchtodos().then(setTodos);
  },[]);

  const [Users, setUsers]= useState([]);
  useEffect(()=> {
  fetchnames().then(setUsers);
  },[]);

  const handleToggle = (id) => {
    setTodos(prev =>
      prev.map(todo => 
        todo.id === id ? { 
        ...todo, 
        completed: !todo.completed,  
        completedAt: !todo.completed ? new Date().toLocaleDateString() : null
      
      
      
      } : todo
      )
    );
  };

  return (
    <div>
  <TodoContainer todos={todos} Users={Users} onClick={handleToggle} />
  </div>
  )
}

export default App

import React, {useState, useEffect} from 'react'
import Todos from './components/Todos'
import axios from 'axios'
import './App.css';

function App() {
  const [todos, setTodos] = useState([])
  
  useEffect( async () => {
    const getTodos = async () => {
      const res = await axios.get("http://localhost:5001");
      setTodos(res.data);
    };

    getTodos();
  }, []);

  return (
    <div className="App">
      <Todos todos={todos} />
    </div>
  );
}

export default App;

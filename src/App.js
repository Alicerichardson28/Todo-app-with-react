import {useState, useEffect} from 'react'
import axios from 'axios'
import './App.css';

function App() {

  const [todos, setTodos] = useState(null)

  useEffect( async () => {
    const getTodos = async () => {
      const res = await axios.get("http://localhost:5001");
      setTodos(res.data);
    }

    getTodos()
  }, []);

  return (
    <div className="App">
      <h1>This is todo app.</h1>
    </div>
  );
}

export default App;

import { useState } from "react";
import classes from "./Tasklist.module.css";
function Tasklist() {
  const [toDos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const addTodo = () => {
    setTodos([...toDos, inputValue]);
    setInputValue("");
  };
  return (
    <div className={classes.topo}>
      <div className={classes.input}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={addTodo}>Add Task</button>
      </div>

      <ul>
        {toDos.map((toDo, index) => (
          <li key={index}>{toDo}</li>
        ))}
      </ul>
    </div>
  );
}

export default Tasklist;

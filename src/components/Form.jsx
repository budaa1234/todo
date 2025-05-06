import { useState } from "react";
import style from "../styles/todo.module.css";
export const Form = ({ setTaskList, taskList }) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAdd = () => {
    const newTask = {
      id: new Date(),
      taskName: inputValue,
      isCompleted: false,
    };
    setTaskList([...taskList, newTask]);
    setInputValue("");
  };
  return (
    <div>
      <div className={style.Container}>
        <div>
          <input
            value={inputValue}
            placeholder="Add a new task..."
            className={style.input}
            oneChange={handleChange}
          />
        </div>
        <div>
          <button className={style.button} onClick={handleAdd}>
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

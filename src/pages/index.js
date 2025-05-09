import { Form } from "@/components/Form";
import style from "../styles/todo.module.css";
import { Task } from "@/components/Task";
import { useState } from "react";
export default function Home() {
  const [taskList, setTaskList] = useState([]);

  const handleDelete = (id) => {
    const updateDelete = taskList.filter((up) => up.id !== id);
    setTaskList(updateDelete);
  };

  const toggleCheckBox = (id) => {
    const toggledTask = taskList.map((task) =>
      task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
    );
    setTaskList(toggledTask);
  };

  return (
    <div>
      <div className={style.list}>
        <p className={style.title}>To-Do list </p>
        <Form setTaskList={setTaskList} taskList={taskList} />
        {taskList.map((task, id) => (
          <Task
            key={id}
            task={task}
            removeTaskById={handleDelete}
            toggleCheckBox={toggleCheckBox}
          />
        ))}
      </div>
    </div>
  );
}

import { Form } from "@/components/Form";
import style from "../styles/todo.module.css";
import { Task } from "@/components/Task";
import { useState } from "react";
import { Filter } from "@/components/Filter";
import { Info } from "@/components/Info";
export default function Home() {
  const [taskList, setTaskList] = useState([]);
  const [filter, setFilter] = useState("All");

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
  const filteredTask = taskList.filter((task) => {
    if (filter === "Active" && task.isCompleted === false) {
      return task;
    }
    if (filter === "Completed" && task.isCompleted === true) {
      return task;
    }
    if (filter === "All") {
      return task;
    }
  });

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div className={style.list}>
        <p className={style.title}>To-Do list </p>
        <Form setTaskList={setTaskList} taskList={taskList} />
        <Filter setFilter={setFilter} />
        {filteredTask.map((task, id) => (
          <Task
            key={id}
            task={task}
            removeTaskById={handleDelete}
            toggleCheckBox={toggleCheckBox}
          />
        ))}
        <Info />
        <div style={{ display: "flex", gap: "5px" }}>
          <p style={{ color: "#6B7280", fontSize: "12px" }}>Powered by</p>
          <p style={{ color: "#3B73ED", fontSize: "12px" }}>Pinecone academy</p>
          <p></p>
        </div>
      </div>
    </div>
  );
}

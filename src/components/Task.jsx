import style from "../styles/todo.module.css";
export const Task = ({ task }) => {
  return (
    <div>
      <div className={style.task}>
        <input type="checkbox" />
        <p>{task.taskName}</p>
        <button className={style.button1}>Delete</button>
      </div>
    </div>
  );
};


import style from "../styles/todo.module.css";
export const Task = ({ task, removeTaskById }) => {
  return (
    <div>
      <div className={style.task}>
        <input type="checkbox" />
        <p>{task.taskName}</p>

        <div>
          <button className={style.button1} onClick={()=> removeTaskById(task.id)}>Delete</button>
        </div>
      </div>
    </div>
  );
};

import style from "../styles/todo.module.css";
export const Task = ({ task, removeTaskById, toggleCheckBox }) => {
  const handleToggleCheckBox = () => {
    toggleCheckBox(task.id);
  };
  return (
    <div>
      <div className={style.task}>
        <input
          type="checkbox"
          checked={task.isCompleted}
          onChange={handleToggleCheckBox}
        />
        <p style={{ textDecoration: task.isCompleted ? "line-through" : "" }}>
          {task.taskName}
        </p>

        <div>
          <button
            className={style.button1}
            onClick={() => removeTaskById(task.id)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

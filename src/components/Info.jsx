import style from "@/styles/todo.module.css";

export const Info = ({ taskList, setTaskList }) => {
  const completedCount = taskList.filter((task) => task.isCompleted).length;
  const totalCount = taskList.length;

  const clearCompleted = () => {
    const activeTasks = taskList.filter((task) => !task.isCompleted);
    setTaskList(activeTasks);
  };

  return (
    <div>
      {totalCount === 0 ? (
        <p className={style.info}>No tasks yet. Add one above!</p>
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "10px",
          }}
        >
          <p className={style.info}>
            {completedCount} of {totalCount} tasks completed
          </p>
          {completedCount > 0 && (
            <button
              onClick={clearCompleted}
              style={{
                color: "red",
                fontSize: "14px",
                border: "none",
                background: "transparent",
                cursor: "pointer",
              }}
            >
              Clear Completed
            </button>
          )}
        </div>
      )}
    </div>
  );
};

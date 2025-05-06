import style from "../styles/todo.module.css";
export const Container = () => {
  return (
    <div>
      <div className={style.Container}>
        <input className={style.input} type="text" placeholder="Add a new task..."/>
        <button className={style.button}>Add</button>
      </div>
      {/* <div>
        <button>All</button>
        <button>Active</button>
        <button>Completed</button>
      </div>
      <p>No tasks yet. Add one above!</p> */}
    </div>
  );
};

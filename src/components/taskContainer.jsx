import style from "../styles/todo.module.css"
export const Task = () => {
  return (
    <div>
      <div className={style.task}>
        <input type="checkbox"/>
        <input type="text"/>
        <button className={style.button1}>Delete</button>
      </div>
    </div>
  );
};

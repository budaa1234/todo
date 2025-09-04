import style from "@/styles/todo.module.css";
export const Info = () => {
  return (
    <div>
      <p className={style.info}>No tasks yet. Add one above!</p>
      <p></p>
    </div>
  );
};

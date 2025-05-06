import { Container } from "@/components/container";
import  style  from "../styles/todo.module.css"
import { Task } from "@/components/taskContainer";
const Todo = () => {
  <div></div>;
  return (
    <div>
      <div className={style.list}>
        <p className={style.title}>To-Do list </p>
        <Container />
        <Task/>
      </div>
    </div>
  );
};
export default Todo;

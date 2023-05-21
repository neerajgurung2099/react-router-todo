import { useContext } from "react";
import { TaskContext } from "../routes/root";

export default function All() {
  const { tasks } = useContext(TaskContext);
  return (
    <ul id="task-list">
      {tasks.map((task) => (
        <Task taskName={task.taskName} />
      ))}
    </ul>
  );
}

const Task = (props) => {
  return (
    <li>
      <span>{props.taskName}</span>
      <div>
        <i className="fa-regular fa-square-check"></i>
        <i className="fa-solid fa-pen-to-square"></i>
        <i className="fa-solid fa-trash"></i>
      </div>
    </li>
  );
};

import { useSelector } from "react-redux";
import { selectTasks } from "../redux-toolkit/selectors";
import { TaskItem } from "./TaskItem";

export const TaskList = () => {
  const tasks = useSelector(selectTasks);
  return (
    <div className="pt-3">
      {tasks.map((item) => (
        <div key={item.id} className="pb-3">
          <TaskItem {...item}></TaskItem>
        </div>
      ))}
    </div>
  );
};

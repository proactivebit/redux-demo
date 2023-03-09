import Card from "react-bootstrap/Card";
import { useSelector } from "react-redux";
import { selectTasksList } from "../redux-toolkit/selectors";
import { TaskItem } from "./TaskItem";

export const HumanItem = ({ name, tasksIds }) => {
  const tasks = useSelector((state) => selectTasksList(state, tasksIds));
  return (
    <Card>
      <Card.Body>{name}</Card.Body>
      {tasks.map((item) => {
        return (
          <div key={item.id} className="p-2">
            <TaskItem {...item} hideUsers={true}></TaskItem>
          </div>
        );
      })}
    </Card>
  );
};

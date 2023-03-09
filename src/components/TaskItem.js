import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import { selectHumans } from "../redux-toolkit/selectors";
import { tasksSilce } from "../redux-toolkit/tasksSlice";

export const TaskItem = ({
  id,
  title,
  completed,
  assignedTo,
  hideUsers = false,
}) => {
  const dispatch = useDispatch();
  const users = useSelector(selectHumans);
  return (
    <Card>
      <Card.Body>
        <Form.Check
          type="checkbox"
          id="done"
          label={title}
          checked={completed}
          onChange={(event) => {
            dispatch(
              tasksSilce.actions.toogle({ id, completed: event.target.checked })
            );
          }}
        />
        {!hideUsers && (
          <Form.Select
            className="mt-2"
            value={assignedTo}
            onChange={(event) => {
              dispatch(
                tasksSilce.actions.assignToUser({
                  taskId: id,
                  userId: event.target.value,
                })
              );
            }}
          >
            <option>Unassigned</option>
            {users.map((user) => (
              <option key={user.id} value={user.id}>
                {user.name}
              </option>
            ))}
          </Form.Select>
        )}
      </Card.Body>
    </Card>
  );
};

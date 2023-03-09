import React from "react";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
import { tasksSilce } from "../redux-toolkit/tasksSlice";

export const CreateTask = () => {
  const [title, setTitle] = React.useState();
  const dispatch = useDispatch();
  return (
    <div>
      <Form
        onSubmit={(event) => {
          event.preventDefault();
          dispatch(tasksSilce.actions.add(title));
          setTitle("");
        }}
      >
        <Form.Group>
          <Form.Label>Task name</Form.Label>
          <Form.Control
            type="text"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </Form.Group>
      </Form>
    </div>
  );
};

import React from "react";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
import { humansSlice } from "../redux-toolkit/humansSlice";

export const CreateHuman = () => {
  const [name, setName] = React.useState();
  const dispatch = useDispatch();

  return (
    <div>
      <Form
        onSubmit={(event) => {
          event.preventDefault();
          dispatch(humansSlice.actions.add(name));
          setName("");
        }}
      >
        <Form.Group>
          <Form.Label>Human name</Form.Label>
          <Form.Control
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </Form.Group>
      </Form>
    </div>
  );
};

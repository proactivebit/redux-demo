import React from "react";
import { useDispatch } from "react-redux";
import { set } from "./actions";

export const SetCounter = () => {
  const [value, setValue] = React.useState();
  const dispatch = useDispatch();

  const onSubmit = () => {
    dispatch(set(value));
  };

  return (
    <div>
      <input value={value} onChange={(event) => setValue(event.target.value)} />
      <button onClick={onSubmit}>submit</button>
    </div>
  );
};

import { useDispatch, useSelector } from "react-redux";
import { set } from "./actions";
import { SetCounter } from "./SetCounter";

export const Counter = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <div>
      <div>{count}</div>
      <div>
        <button>Increase</button>
        <button>Decrease</button>
        <button onClick={() => dispatch(set(0))}>Set</button>
      </div>
      <SetCounter></SetCounter>
    </div>
  );
};

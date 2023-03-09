import { useSelector } from "react-redux";
import { selectHumans } from "../redux-toolkit/selectors";
import { HumanItem } from "./HumanItem";

export const HumanList = () => {
  const humans = useSelector(selectHumans);

  return (
    <div className="pt-3">
      {humans.map((item) => (
        <div key={item.id} className="pb-3">
          <HumanItem {...item}></HumanItem>
        </div>
      ))}
    </div>
  );
};

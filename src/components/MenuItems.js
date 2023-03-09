import { MenuItemContainer } from "../containers/MenuItemContainer";

export const MenuItems = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <div key={item.id} className="mb-3">
          <MenuItemContainer {...item}></MenuItemContainer>
        </div>
      ))}
    </div>
  );
};

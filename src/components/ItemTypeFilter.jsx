import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onTypeSelect, selectAllItemTypes } from "../store/dataSlice";

const ItemTypeFilter = () => {
  const dispatch = useDispatch();
  const [active, setActive] = useState("");
  const itemTypes = useSelector(selectAllItemTypes);

  const handleTypeClick = (itemType) => {
    dispatch(onTypeSelect(itemType));
    setActive(itemType);
  };
  return (
    <div className="item-types-wrapper">
      {itemTypes.map((type, index) => {
        return (
          <div
            key={index}
            className={`${active === type ? "active" : ""} item-type`}
            onClick={() => {
              handleTypeClick(type);
            }}
          >
            {type}
          </div>
        );
      })}
    </div>
  );
};
export default ItemTypeFilter;

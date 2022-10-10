import { useDispatch } from "react-redux";
import { onSorting } from "../store/dataSlice";

const SortingComponent = () => {
  const dispatch = useDispatch();
  const values = [
    { value: "lowest", name: "Price low to high" },
    { value: "highest", name: "Price high to low" },
    { value: "newest", name: "New to old" },
    { value: "oldest", name: "Old to new" },
  ];
  const handleChange = (e) => {
    dispatch(onSorting(e.target.value));
  };

  return (
    <div className="filtering-wrapper">
      <p className="filter-title">Sorting</p>
      <div className="input-group">
        {values.map((value, index) => {
          return (
            <label key={index}>
              <input
                type="radio"
                name="radio-button"
                value={value.value}
                onChange={(e) => handleChange(e)}
              />
              {value.name}
            </label>
          );
        })}
      </div>
    </div>
  );
};
export default SortingComponent;

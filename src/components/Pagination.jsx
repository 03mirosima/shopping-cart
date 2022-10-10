import { useDispatch, useSelector } from "react-redux";
import {
  onClickNext,
  onClickPrev,
  onNumberClick,
  selectCurrentPage,
} from "../store/paginationSlice";
import ArrowLeft from "../images/arrow-left.svg";
import ArrowRight from "../images/arrow-right.svg";

const Pagination = ({ itemLenght, itemLimit }) => {
  const dispatch = useDispatch();
  const currentPageNumber = useSelector(selectCurrentPage);
  //We find the total page number by dividing item lenght to limit
  const pageNumber = Math.ceil(itemLenght / itemLimit);
  const Pager = () => {
    let pagination = [],
      i = 1;

    while (i <= pageNumber) {
      if (
        i <= 4 ||
        i >= pageNumber - 2 ||
        (i >= currentPageNumber - 1 && i <= currentPageNumber + 1)
      ) {
        pagination.push(
          <li
            key={i}
            className={`page-numbers ${currentPageNumber == i ? "active" : ""}`}
          >
            {i}
          </li>
        );
        i++;
      } else {
        pagination.push(<div>...</div>);
        i = i < currentPageNumber ? currentPageNumber - 1 : pageNumber - 2;
      }
    }
    return pagination;
  };
  return (
    <ul className="pagination">
      <li
        className={`arrows prev-arrow ${
          currentPageNumber == 1 ? "disabled" : "active"
        }`}
        onClick={() => {
          dispatch(onClickPrev());
        }}
      >
        <ArrowLeft />
        Prev
      </li>
      {/*   {pageNumberArray.map((number) => {
        return (
          <li
            key={number}
            onClick={() => {
              dispatch(onNumberClick(number));
            }}
            className={`page-numbers ${
              currentPageNumber == number ? "active" : ""
            }`}
          >
            {number}
          </li>
        );
      })} */}{" "}
      <Pager />
      <li
        className={`arrows next-button ${
          pageNumber === currentPageNumber ? "disabled" : "active"
        }`}
        onClick={() => {
          dispatch(onClickNext());
        }}
      >
        <ArrowRight />
        Next
      </li>
    </ul>
  );
};
export default Pagination;

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
  //Then we make an array to that page number
  const pageNumberArray = [...Array(pageNumber + 1).keys()].slice(1);

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
      {pageNumberArray.map((number) => {
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
      })}
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

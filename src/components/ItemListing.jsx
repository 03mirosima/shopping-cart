import { selectAllItems, getItems } from "../store/shoppingCartSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import frogMug from "../images/frog_mug.jpg";
import starWarsShirt from "../images/starwars-shirt.jpg";
import Pagination from "./Pagination";
import { selectCurrentPage, selectItemLimit } from "../store/paginationSlice";

const ItemListing = () => {
  const dispatch = useDispatch();
  const allItems = useSelector(selectAllItems);
  const currentPage = useSelector(selectCurrentPage);
  const itemLimit = useSelector(selectItemLimit);

  //We find the last and first index of records
  const lastRecordIndex = currentPage * itemLimit;
  const firstRecordIndex = lastRecordIndex - itemLimit;
  //We slice items first to last index
  const paginationItems = allItems.slice(firstRecordIndex, lastRecordIndex);
  useEffect(() => {
    dispatch(getItems());
  }, [dispatch]);

  return (
    <section className="middle-section">
      <div className="item-list-wrapper">
        {paginationItems.map((item, index) => {
          return (
            <div key={index} className="item-wrapper">
              <div className="item-image">
                <img
                  src={item.itemPicture === "frogMug" ? frogMug : starWarsShirt}
                />
              </div>
              <div className="item-info">
                <span className="item-price">
                  <span className="turkish-lira">₺</span> {item.price}
                </span>
                <span className="item-name">{item.name}</span>
                <button className="add-item-button">Add</button>
              </div>
            </div>
          );
        })}
      </div>

      <Pagination itemLenght={allItems.length} itemLimit={itemLimit} />
    </section>
  );
};

export default ItemListing;

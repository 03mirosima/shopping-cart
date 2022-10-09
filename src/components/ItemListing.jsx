import {
  selectAllItems,
  getItems,
  selectFilteredItems,
} from "../store/dataSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import frogMug from "../images/frog_mug.jpg";
import starWarsShirt from "../images/starwars-shirt.jpg";
import Pagination from "./Pagination";
import { selectCurrentPage, selectItemLimit } from "../store/paginationSlice";
import ItemTypeFilter from "./ItemTypeFilter";

const ItemListing = () => {
  const dispatch = useDispatch();
  const allItems = useSelector(selectAllItems);
  const filteredItems = useSelector(selectFilteredItems);
  const currentPage = useSelector(selectCurrentPage);
  const itemLimit = useSelector(selectItemLimit);

  //We find the last and first index of records
  const lastRecordIndex = currentPage * itemLimit;
  const firstRecordIndex = lastRecordIndex - itemLimit;
  //We slice items first to last index
  const paginationItems =
    filteredItems.length > 0
      ? filteredItems.slice(firstRecordIndex, lastRecordIndex)
      : allItems.slice(firstRecordIndex, lastRecordIndex);
  useEffect(() => {
    dispatch(getItems());
  }, [dispatch]);
  return paginationItems.length > 0 ? (
    <section className="middle-section">
      <p className="title">Products</p>
      <ItemTypeFilter />
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

      <Pagination
        itemLenght={
          filteredItems.length > 0 ? filteredItems.length : allItems.length
        }
        itemLimit={itemLimit}
      />
    </section>
  ) : (
    <section className="middle-section">
      <h3>Ürün Bulunamadı</h3>
    </section>
  );
};

export default ItemListing;

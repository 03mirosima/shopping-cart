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
import { addCart, sumAmount } from "../store/shoppingCartSlice";

const ItemListing = () => {
  const dispatch = useDispatch();

  const handleAddCart = (itemName, itemPrice, Index) => {
    dispatch(addCart({ itemName, itemPrice, Index, quantity: 1 }));
  };
  useEffect(() => {
    dispatch(getItems());
  }, [dispatch]);

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

  return (
    <section className="middle-section">
      <p className="title">Products</p>
      <ItemTypeFilter />
      {paginationItems.length > 0 ? (
        <>
          <div className="item-list-wrapper">
            {paginationItems.map((item, index) => {
              return (
                <div key={index} className="item-wrapper">
                  <div className="item-image">
                    <img
                      src={
                        item.itemPicture === "frogMug" ? frogMug : starWarsShirt
                      }
                    />
                  </div>
                  <div className="item-info">
                    <span className="item-price">
                      <span className="turkish-lira">₺</span> {item.price}
                    </span>
                    <span className="item-name">{item.name}</span>
                    <button
                      className="add-item-button"
                      onClick={() =>
                        handleAddCart(item.name, item.price, index)
                      }
                    >
                      Add
                    </button>
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
        </>
      ) : (
        <p>Product Not Found</p>
      )}
    </section>
  );
};

export default ItemListing;

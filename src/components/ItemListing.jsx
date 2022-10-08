import { selectAllItems, getItems } from "../store/shoppingCartSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import frogMug from "../images/frog_mug.jpg";
import starWarsShirt from "../images/starwars-shirt.jpg";

const ItemListing = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getItems());
  }, [dispatch]);
  const allItems = useSelector(selectAllItems);

  return (
    <section className="item-list-wrapper">
      {allItems.map((item) => {
        return (
          <div className="item-wrapper">
            <div className="item-image">
              <img
                src={item.itemPicture === "frogMug" ? frogMug : starWarsShirt}
              />
            </div>
            <div className="item-info">
              <span className="item-price">₺ {item.price}</span>
              <span className="item-name">{item.name}</span>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default ItemListing;

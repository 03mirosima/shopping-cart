import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decreaseQuantity,
  selectCartContent,
  selectCartTotal,
  increaseQuantity,
} from "../store/shoppingCartSlice";

const ShoppingCart = () => {
  const dispatch = useDispatch();

  const handleDecreaseItem = (Index, quantity) => {
    dispatch(decreaseQuantity({ Index: Index, quantity: quantity }));
  };
  const handleIncrease = (Index, quantity) => {
    dispatch(increaseQuantity({ Index: Index, quantity: quantity }));
  };
  const cartItems = useSelector(selectCartContent);
  const totalPrice = useSelector(selectCartTotal);
  console.log(totalPrice);

  return (
    <div className="cart-wrapper">
      <div>
        {cartItems.length > 0 ? (
          <ul className="cart-list">
            {cartItems.map((item) => {
              return (
                <li className="cart-item">
                  <div className="cart-info">
                    <span className="item-name">{item.itemName}</span>
                    <span className="item-price">
                      {" "}
                      <span className="turkish-lira">₺ </span>
                      {item.itemPrice}
                    </span>
                  </div>
                  <div className="cart-buttons">
                    <button
                      onClick={() =>
                        handleDecreaseItem(item.Index, item.quantity)
                      }
                    >
                      -
                    </button>{" "}
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => {
                        handleIncrease(item.Index, item.quantity);
                      }}
                    >
                      +
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>
        ) : (
          <p className="no-items">No Items in the Cart</p>
        )}
        <span className="cart-total">
          <span className="turkish-lira">₺</span>
          {totalPrice}
        </span>
      </div>
    </div>
  );
};
export default ShoppingCart;

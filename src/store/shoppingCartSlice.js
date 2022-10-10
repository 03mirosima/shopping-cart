import { createSlice } from "@reduxjs/toolkit";
import _ from "lodash";

const shoppingCartSlice = createSlice({
  name: "shoppingCart",
  initialState: {
    cart: [],
    sendSelectedItems: [],
    totalPrice: 0,
  },
  reducers: {
    addCart: (state, { payload }) => {
      const isFound = state.cart.find((c) => c.Index === payload.Index);
      if (isFound) {
        isFound.Index = payload.Index;
        let totalQuantity = (isFound.quantity += 1);
        state.totalPrice = isFound.itemPrice * totalQuantity;
      } else {
        state.cart.push(payload);
        state.totalPrice += payload.itemPrice * payload.quantity;
      }
    },
    sumAmount: (state) => {
      console.log("kk");
      state.cart.forEach((c) => {
        console.log(c.itemPrice);
        state.totalPrice += c.itemPrice * c.quantity;
      });
    },

    decreaseQuantity: (state, { payload }) => {
      const isFound = state.cart.find((c) => c.Index === payload.Index);
      if (isFound) {
        isFound.quantity -= 1;
        state.totalPrice -= isFound.itemPrice;
      }
    },
    increaseQuantity: (state, { payload }) => {
      const isFound = state.cart.find((c) => c.Index === payload.Index);
      if (isFound) {
        isFound.quantity += 1;
        isFound.totalPrice += isFound.itemPrice;
      }
    },
    deleteCart: (state, action) => {
      const currntState = _.merge([], state.cart);
      const res = [];
      currntState.forEach((c) => {
        if (c.Index !== action.payload.Index) {
          res.push(c);
        }
      });

      return { ...state, cart: res };
    },
    sendSelectedItems: (state, { payload }) => {
      state.sendSelectedItems.push(payload);
    },
    deletedSumAmount: (state, { payload }) => {
      state.totalPrice -= payload.price * payload.quantity;
    },
  },
});

export const {
  addCart,
  deleteCart,
  increaseQuantity,
  decreaseQuantity,
  sendSelectedItems,
  sumAmount,
  deletedSumAmount,
} = shoppingCartSlice.actions;

export const selectCartContent = (state) => state.shoppingCart.cart;
export const selectCartTotal = (state) => state.shoppingCart.totalPrice;

export default shoppingCartSlice.reducer;

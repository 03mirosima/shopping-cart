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
        isFound.quantity += 1;
        state.totalPrice += isFound.itemPrice;
      } else {
        state.cart.push(payload);
        state.totalPrice += payload.itemPrice * payload.quantity;
      }
    },

    decreaseQuantity: (state, { payload }) => {
      const item = state.cart.find((c) => c.Index === payload.Index);
      if (item) {
        item.quantity -= 1;
        state.totalPrice -= item.itemPrice;
      }
      //If item quantity is 0 remove from cart
      if (item.quantity === 0) {
        state.cart = state.cart.filter((c) => c.Index !== payload.Index);
      }
    },
    increaseQuantity: (state, { payload }) => {
      const item = state.cart.find((c) => c.Index === payload.Index);
      if (item) {
        item.quantity += 1;
        state.totalPrice += item.itemPrice;
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
  deletedSumAmount,
} = shoppingCartSlice.actions;

export const selectCartContent = (state) => state.shoppingCart.cart;
export const selectCartTotal = (state) => state.shoppingCart.totalPrice;

export default shoppingCartSlice.reducer;

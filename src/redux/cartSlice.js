import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
  //cartItems: [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
  cartQuantity: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload;
      const find = state.cartItems.findIndex(
        (item) => item._id === newItem._id
      );
      if (find >= 0) {
        state.cartItems[find].cartQuantity += newItem.cartQuantity;
        // toast.success("Thêm vào giỏ hàng thành công", {
        //   position: "top-right",
        // });
      } else {
        state.cartItems = [...state.cartItems, { ...newItem }];
        // toast.success("Thêm vào giỏ hàng thành công", {
        //   position: "top-right",
        // });
      }

      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    removeCart(state, action) {
      const nextCartItems = state.cartItems.filter(
        (item) => item._id !== action.payload._id
      );
      state.cartItems = nextCartItems;

      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    increaseCart(state, action) {
      const newItem = action.payload;
      const find = state.cartItems.findIndex(
        (item) => item._id === newItem._id
      );
      if (find >= 0) {
        state.cartItems[find].cartQuantity += 1;
      } else {
        state.cartItems = [...state.cartItems, { ...newItem }];
      }

      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    decreaseCart(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item._id === action.payload._id
      );
      if (state.cartItems[itemIndex].cartQuantity > 1) {
        state.cartItems[itemIndex].cartQuantity -= 1;
        localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      } else if (state.cartItems[itemIndex].cartQuantity === 1) {
        const nextCartItems = state.cartItems.filter(
          (item) => item._id !== action.payload._id
        );
        state.cartItems = nextCartItems;

        localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      }
    },
    getTotals(state, action) {
      let { total, quantity } = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          const { price, cartQuantity } = cartItem;
          const itemTotal = price * cartQuantity;

          cartTotal.total += itemTotal;
          cartTotal.quantity += cartQuantity;

          return cartTotal;
        },
        {
          total: 0,
          quantity: 0,
        }
      );

      state.cartTotalQuantity = quantity;
      state.cartTotalAmount = total;
    },
  },
});

export const { addToCart, removeCart, decreaseCart, increaseCart, getTotals } =
  cartSlice.actions;

export default cartSlice.reducer;

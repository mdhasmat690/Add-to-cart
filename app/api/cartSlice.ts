import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useAddToCartMutation } from "./apiSlice";
import { Product } from "./productType";

export interface CartState {
  productsInCart: Product[];
  total: number;
}

const initialState: CartState = {
  productsInCart: [],
  total: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart: (state, action: PayloadAction<Product>) => {
      const productInCart = state.productsInCart.find(
        (product) => product.id === action.payload.id
      );
      if (!productInCart) {
        state.productsInCart.push({ ...action.payload, quantity: 1 });
      } else {
        productInCart.quantity++;
      }
    },

    deleteItemFromCart: (state, action: PayloadAction<Product>) => {
      const productInCartIndex = state.productsInCart.findIndex(
        (product) => product.id === action.payload.id
      );

      if (state.productsInCart[productInCartIndex]?.quantity === 1) {
        state.productsInCart.splice(productInCartIndex, 1);
      } else {
        state.productsInCart[productInCartIndex].quantity--;
      }
    },
  },
});

export const { addItemToCart, deleteItemFromCart } = cartSlice.actions;

export default cartSlice.reducer;

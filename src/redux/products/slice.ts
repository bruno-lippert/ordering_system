import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../../types/Product";

interface ProductsState {
  products: Product;
}

const initialState: ProductsState = {
  products: {
    id: '',
    idcompany: null,
    description: '',
    price: null,
    stockquantity: null,
    unitofmeasure: ''
  }
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setSelectedProduct: (state, action: PayloadAction<Product>) => {
      state.products = action.payload;
    },
    // addProducts: (state, action: PayloadAction<Product>) => {
    //     state.products.push(action.payload)
    // }
  },
});

export const { setSelectedProduct } = productsSlice.actions;

export default productsSlice.reducer;

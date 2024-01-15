import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../../types/Product";

interface ProductsState {
  products: Product[];
  selectedProduct: Product
}

const initialState: ProductsState = {
  products: [],
  selectedProduct: {
    id: null,
    description: null,
    idcompany: null,
    price: null,
    stockquantity: null,
    unitofmeasure: null
  }
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProduct: (state, action: PayloadAction<Product[]>) => {
      state.products = action.payload;
    },
    setSelectedProduct:(state, action: PayloadAction<Product>) => {
      state.selectedProduct = action.payload;
    }
    // addProducts: (state, action: PayloadAction<Product>) => {
    //     state.products.push(action.payload)
    // }
  },
});

export const { setProduct, setSelectedProduct } = productsSlice.actions;

export default productsSlice.reducer;

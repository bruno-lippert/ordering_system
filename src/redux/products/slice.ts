import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Product } from "../../types/Product";

interface ProductsState {
    products: Product[];
  }
  
  const initialState: ProductsState = {
    products: [],
  };

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setProducts: (state, action: PayloadAction<Product[]>) => {
            state.products = action.payload;
          },
        addProducts: (state, action: PayloadAction<Product>) => {
            state.products.push(action.payload)
        }

    }
})

export const { addProducts, setProducts } = productsSlice.actions

export default productsSlice.reducer
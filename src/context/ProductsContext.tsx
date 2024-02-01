import { createContext, useState } from "react";
import { getProductsByIDCompany } from "../services/productsManagement";
import { Product } from "../types/Product";

export const ProductsContext = createContext(undefined);

export default function ProductsProvider({children}) {
    const [description, setDescription] = useState<string>();


  return (
    <ProductsContext.Provider value={{description, setDescription}}>
      {children}
    </ProductsContext.Provider>
  )
}

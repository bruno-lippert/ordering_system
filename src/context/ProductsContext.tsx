import { createContext, useState } from "react";
import { getProductsByIDCompany } from "../services/productsManagement";
import { Product } from "../types/Product";

export const ProductsContext = createContext(undefined);

export default function ProductsProvider({ children }) {
  const [productDescriptionToFilter, setproductDescriptionToFilter] = useState<string>();
  const [productModal, setProductModal] = useState<boolean>(false);

  return (
    <ProductsContext.Provider
      value={{ productDescriptionToFilter, setproductDescriptionToFilter, productModal, setProductModal }}
    >
      {children}
    </ProductsContext.Provider>
  );
}

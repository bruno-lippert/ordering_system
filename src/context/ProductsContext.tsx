import { createContext, useState } from "react";
import { getProductsByIDCompany } from "../services/productsManagement";
import { Product } from "../types/Product";

interface ProductsContextProps {
  productDescriptionToFilter: string | undefined;
  setproductDescriptionToFilter: React.Dispatch<React.SetStateAction<string | undefined>>;
  productModal: boolean;
  setProductModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ProductsContext = createContext<ProductsContextProps | undefined>(undefined);

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

import { createContext, useState } from "react";
import { getProductsByIDCompany } from "../services/productsManagement";
import { Product } from "../types/Product";

interface ProductsContextProps {
  productDescriptionToFilter: string | undefined;
  setproductDescriptionToFilter: React.Dispatch<
    React.SetStateAction<string | undefined>
  >;
  productModal: boolean;
  setProductModal: React.Dispatch<React.SetStateAction<boolean>>;
  idCompany:  string | undefined;
  setIdCompany: React.Dispatch<React.SetStateAction<string>>;
  products: Product[];
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
  fetchProducts: () => Promise<void>;
}

export const ProductsContext = createContext<ProductsContextProps | undefined>(
  undefined
);

export default function ProductsProvider({ children }) {
  const [productDescriptionToFilter, setproductDescriptionToFilter] =
    useState<string>();
  const [productModal, setProductModal] = useState<boolean>(false);
  const [idCompany, setIdCompany] = useState<string>();
  const [products, setProducts] = useState<Product[]>([]);

  const fetchProducts = async () => {
    if (idCompany) {
      const fetchedProducts = await getProductsByIDCompany(idCompany);
      console.log(idCompany);

      if (fetchedProducts !== null) {
        // Se houver uma descrição, filtre os produtos com base nela
        const filteredProducts = productDescriptionToFilter
          ? fetchedProducts.filter((product) =>
              product.description
                .toLowerCase()
                .includes(productDescriptionToFilter.toLowerCase())
            )
          : fetchedProducts;
        setProducts(filteredProducts);
      }
    } else {
      setProducts([]);
    }
  };

  return (
    <ProductsContext.Provider
      value={{
        productDescriptionToFilter,
        setproductDescriptionToFilter,
        productModal,
        setProductModal,
        idCompany,
        setIdCompany,
        products,
        setProducts,
        fetchProducts,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
}

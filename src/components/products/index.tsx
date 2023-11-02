import React, { ReactNode, useEffect, useState } from "react";
import * as S from "./styles";
import { Product } from "../../types/Product";
import { getProductsByIDCompany } from "../../services/productsManagement";
import ProductTableArea from "./productList/tableArea";
import ProductFilter from "./searchFilter/ProductFilter";
import { useDispatch } from "react-redux";
import { addProducts } from "../../redux/products/slice";

export const Products = () => {

  const [products, setProducts] = useState<Product[]>([])

  const dispatch = useDispatch()

  useEffect(() => {
    localStorage.setItem("currentIdCompany", "46");
    fetchProducts()
  }, []);
 
  const fetchProducts = async () => {
    setProducts(await getProductsByIDCompany('46'))
    dispatch(addProducts(products))
  } 

  return (
    <S.Container>
      <ProductFilter />
      <ProductTableArea prod={products}/>
    </S.Container>
  );
};

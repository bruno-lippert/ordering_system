import React, { useState } from "react";
import * as S from "./styles";
import ProductTableArea from "./productList/tableArea";
import ProductFilter from "./searchFilter/ProductFilter";
import ProductsProvider, {
  ProductsContext,
} from "../../context/ProductsContext";

export const Products = () => {
  return (
    <S.ProductsContainer>
      <ProductsProvider>
        <ProductFilter />
        <ProductTableArea />
      </ProductsProvider>
    </S.ProductsContainer>
  );
};

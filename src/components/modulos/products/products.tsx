import React, { useState } from "react";
import * as S from "../styles";
import ProductTableArea from "./productList/tableArea";
import ProductFilter from "./searchFilter/ProductFilter";
import ProductsProvider from "../../../context/ProductsContext";

export const Products = () => {
  return (
    <S.ModulosContainer>
      <ProductsProvider>
        <ProductFilter />
        <ProductTableArea />
      </ProductsProvider>
    </S.ModulosContainer>
  );
};

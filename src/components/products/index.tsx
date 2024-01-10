import React from "react";
import * as S from "./styles";import ProductTableArea from "./productList/tableArea";
import ProductFilter from "./searchFilter/ProductFilter";

export const Products = () => {
  return (
    <S.Container>
      <ProductFilter />
      <ProductTableArea/>
    </S.Container>
  );
};

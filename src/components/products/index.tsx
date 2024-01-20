import React, { useState } from "react";
import * as S from "./styles";
import ProductTableArea from "./productList/tableArea";
import ProductFilter from "./searchFilter/ProductFilter";
import AddProductButton from "./menageProducts/addProduct";

export const Products = () => {

  return (
    <S.ProductsContainer>
      <ProductFilter />
      <ProductTableArea />
    </S.ProductsContainer>
  );
};

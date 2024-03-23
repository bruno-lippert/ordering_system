import React, { useContext, useState } from "react";
import * as S from "./styles";
import { ProductsContext } from "../../../../context/ProductsContext";

export default function ProductFilter() {
  const { productDescriptionToFilter, setproductDescriptionToFilter } = useContext(ProductsContext)!;

  const handleProductDescriptionChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setproductDescriptionToFilter(event.target.value);
  };

  return (
    <S.FilterContainer>
      <S.InputArea>
        <div className="inputContainer">
          <label htmlFor="description">Descrição: </label>
          <input
            type="text"
            name="description"
            id="description"
            value={productDescriptionToFilter} 
            onChange={handleProductDescriptionChange}
          />
        </div>
      </S.InputArea>
    </S.FilterContainer>
  );
}

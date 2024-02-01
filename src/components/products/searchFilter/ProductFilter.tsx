import React, { useContext, useState } from "react";
import * as S from "./styles";
import { ProductsContext } from "../../../context/ProductsContext";

export default function ProductFilter() {
  const { description, setDescription } = useContext(ProductsContext);

  const handleProductDescriptionChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setDescription(event.target.value);
  };

  return (
    <S.Container>
      <S.InputArea>
        <div className="input">
          <label htmlFor="description">Descrição: </label>
          <input
            type="text"
            name="description"
            id="description"
            value={description} 
            onChange={handleProductDescriptionChange}
          />
        </div>
      </S.InputArea>

      <S.SearchButton className="search" type="button" value="Pesquisar"/>
    </S.Container>
  );
}

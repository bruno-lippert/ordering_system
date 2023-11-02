import React from "react";
import * as S from "./styles";

export default function ProductFilter() {
  return (
    <S.Container>
      <S.InputArea>
        <div className="input">
          <label htmlFor="description">Descrição: </label>
          <input type="text" name="description" id="description" />
        </div>

        <div className="input">
          <label htmlFor="id" >ID: </label>
          <input type="text" name="id" id="id" />
        </div>
      </S.InputArea>

      <S.SearchButton className="search" type="button" value="Pesquisar" />
    </S.Container>
  );
}

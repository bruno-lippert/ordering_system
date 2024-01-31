import React from "react";
import * as S from "./styles";
import { Button } from "../styles";

type Props = {
  saveProduct: () => void;
};

export default function SaveProduct({ saveProduct }: Props) {
  return (
    <S.SaveProductContainer>
      <Button onClick={saveProduct}>Salvar</Button>
    </S.SaveProductContainer>
  );
}

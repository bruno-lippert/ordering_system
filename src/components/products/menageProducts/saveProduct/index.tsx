import React from "react";
import * as S from "./styles";
import { Button } from "../styles";
import {
  createProduct,
  updatePtoduct,
} from "../../../../services/productsManagement";
import { useSelector } from "react-redux";
import { Product } from "../../../../types/Product";

type Props = {
  updateProduct: () => void;
};

export default function SaveProduct({ updateProduct }: Props) {
  return (
    <S.SaveProductContainer>
      <Button onClick={updateProduct}>Salvar</Button>
    </S.SaveProductContainer>
  );
}

import React from "react";
import ManageProducts from "../menageProducts";
import * as S from "./styles";

type Props = {
  setProductModal: (v: boolean) => void
}

export default function ProductModal({ setProductModal }: Props) {

  const handleCloseModal = () => {
    setProductModal(false)
  } 

  return (
    <S.ProductModalContainer>
      <S.ContentContainer>
        <button onClick={handleCloseModal}>X</button>
        <ManageProducts />
      </S.ContentContainer>
    </S.ProductModalContainer>
  );
}

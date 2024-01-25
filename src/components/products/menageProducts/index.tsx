import React from "react";
import * as S from "./styles";
import DeleteProduct from "./deleteProduct";
import SaveProduct from "./saveProduct";

type Props = {
  updateProduct: () => void
}

export default function ManageProducts({ updateProduct }: Props) {
  return (
    <S.Container>
      <SaveProduct updateProduct={updateProduct}/>
      <DeleteProduct />
    </S.Container>
  );
}

import React from "react";
import * as S from "./styles";
import DeleteProduct from "./deleteProduct";
import SaveProduct from "./saveProduct";

type Props = {
  saveProduct: () => void
}

export default function ManageProducts({ saveProduct }: Props) {
  return (
    <S.Container>
      <SaveProduct saveProduct={saveProduct}/>
      <DeleteProduct />
    </S.Container>
  );
}

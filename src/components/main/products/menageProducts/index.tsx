import React from "react";
import * as S from "./styles";
import DeleteProduct from "./deleteProduct";
import SaveProduct from "./saveProduct";

type Props = {
  saveProduct: () => void,
  delProduct: () => void
}

export default function ManageProducts({ saveProduct, delProduct }: Props) {
  return (
    <S.Container>
      <SaveProduct saveProduct={saveProduct}/>
      <DeleteProduct delProduct={delProduct}/>
    </S.Container>
  );
}

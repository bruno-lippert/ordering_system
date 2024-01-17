import React from "react";
import * as S from "./styles";
import AddProduct from "./addProduct";
import DeleteProduct from "./deleteProduct";
import EditProduct from "./editProduct";

export default function ManageProducts() {
  return (
    <S.Container>
      <EditProduct />
      <DeleteProduct />
    </S.Container>
  );
}

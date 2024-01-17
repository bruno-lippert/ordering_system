import React, { useEffect, useState } from "react";
import * as S from "./styles";
import { Product } from "../../../../types/Product";
import { getProductsByIDCompany } from "../../../../services/productsManagement";
import ProductModal from "../../productModal";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedProduct } from "../../../../redux/products/slice";
import { priceFormatting } from "../../../../helpers/formattedInformation";

export default function ProductTableItem() {
  const [productModal, setProductModal] = useState<boolean>(false);
  const products = useSelector((state: any) => state.productsReducer.products);
  const dispatch = useDispatch()

  const handleProductModal = (item: Product) => {
    setProductModal(true);
    dispatch(setSelectedProduct(item))
  };

  return (
    <>
      <S.ItemsContainer>
        {products ? (
          products.map((prod) => (
            <S.Items key={prod.id} onClick={() => handleProductModal(prod)}>
              <S.ItemsProperty
                width={10}
                style={{
                  borderTopLeftRadius: "8px",
                  borderBottomLeftRadius: "8px",
                }}
              >
                {prod.id}
              </S.ItemsProperty>
              <S.ItemsProperty width={40}>{prod.description}</S.ItemsProperty>
              <S.ItemsProperty width={20}>R$ {priceFormatting(prod.price)}</S.ItemsProperty>
              <S.ItemsProperty width={15}>{prod.stockquantity}</S.ItemsProperty>
              <S.ItemsProperty
                width={15}
                style={{
                  borderTopRightRadius: "8px",
                  borderBottomRightRadius: "8px",
                }}
              >
                {prod.unitofmeasure}
              </S.ItemsProperty>
            </S.Items>
          ))
        ) : (
          <p>Nenhum produto cadastrado</p>
        )}
      </S.ItemsContainer>

      {productModal && <ProductModal setProductModal={setProductModal} />}
    </>
  );
}

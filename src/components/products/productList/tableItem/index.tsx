import React, { useEffect, useState } from "react";
import * as S from "./styles";
import { Product } from "../../../../types/Product";
import { getProductsByIDCompany } from "../../../../services/productsManagement";
import ProductModal from "../../productModal";

export default function ProductTableItem() {
  const [products, setProducts] = useState<Product[]>([]);
  const [productModal, setProductModal] = useState<boolean>(false);

  useEffect(() => {
    localStorage.setItem("currentIdCompany", "46");
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    setProducts(await getProductsByIDCompany("46"));
  };

  const handleProductModal = async () => {
    setProductModal(true)
  };

  return (
    <>
      <S.ItemsContainer>
        {products ? (
          products.map((prod) => (
            <S.Items key={prod.id} onClick={handleProductModal}>
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
              <S.ItemsProperty width={20}>{prod.price}</S.ItemsProperty>
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

      {productModal && <ProductModal setProductModal={setProductModal}/>}
    </>
  );
}

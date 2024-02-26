import React, { useContext, useEffect, useState } from "react";
import * as S from "./styles";
import { Product } from "../../../../types/Product";
import { getProductsByIDCompany } from "../../../../services/productsManagement";
import ProductModal from "../../modals/productForm";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedProduct } from "../../../../redux/products/slice";
import { priceFormatting } from "../../../../helpers/formattedInformation";
import SaveProductButton from "../../menageProducts/addProduct";
import { ProductsContext } from "../../../../context/ProductsContext";

type Props = {
  itemsToDisplay: Product[];
};

export default function ProductTableItem({ itemsToDisplay }: Props) {
  const { productModal, setProductModal } = useContext(ProductsContext)!;

  const [isEditing, setIsEditing] = useState<boolean>(false);
  const products = useSelector((state: any) => state.productsReducer.products);
  const dispatch = useDispatch();

  const handleProductModal = (item: Product) => {
    setIsEditing(true);
    setProductModal(true);
    dispatch(setSelectedProduct(item));
  };

  return (
    <>
      <S.ItemsContainer>
        {itemsToDisplay ? (
          itemsToDisplay.map((prod) => (
            <S.Items key={prod.id} onClick={() => handleProductModal(prod)}>
              <S.ItemsProperty
                width={45}
                style={{
                  borderTopLeftRadius: "8px",
                  borderBottomLeftRadius: "8px",
                }}
              >
                {prod.description}
              </S.ItemsProperty>
              <S.ItemsProperty width={25}>
                R$ {priceFormatting(prod.price.toString())}
              </S.ItemsProperty>
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

      {productModal && (
        <ProductModal isEditing={isEditing} setIsEditing={setIsEditing} />
      )}
    </>
  );
}

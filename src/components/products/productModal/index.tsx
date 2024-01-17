import React from "react";
import ManageProducts from "../menageProducts";
import * as S from "./styles";
import { useSelector } from "react-redux";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { priceFormatting } from "../../../helpers/formattedInformation";
import { Product } from "../../../types/Product";

type Props = {
  setProductModal: (v: boolean) => void;
};

export default function ProductModal({ setProductModal }: Props) {
  const product: Product = useSelector(
    (state: any) => state.productsReducer.selectedProduct
  );

  const handleCloseModal = () => {
    setProductModal(false);
  };

  return (
    <S.ProductModalContainer>
      <S.ContentContainer>
        <div className="closeModal" onClick={handleCloseModal}>
          <IoMdCloseCircleOutline />
        </div>
        <S.InfosProduct>
          <S.Input>
            <label htmlFor="idprod">Cód:</label>
            <input
              type="text"
              name="idprod"
              id="idprod"
              disabled
              value={product.id}
            />
          </S.Input>
          <S.Input>
            <label htmlFor="description">Descrição:</label>
            <input
              type="text"
              name="description"
              id="description"
              value={product.description}
            />
          </S.Input>
          <S.Input>
            <label htmlFor="price">Preço:</label>
            <input
              type="text"
              name="price"
              id="price"
              value={priceFormatting(product.price)}
            />
          </S.Input>
          <S.Input>
            <label htmlFor="stockquantity">Estoque: </label>
            <input
              type="text"
              name="stockquantity"
              id="stockquantity"
              value={product.stockquantity}
              disabled
            />
          </S.Input>
          <S.Input>
            <label htmlFor="unitofmeasure">Uni de medida:</label>
            <select name="unitofmeasure" id="unitofmeasure">
              <option value={product.unitofmeasure}>
                {product.unitofmeasure}
              </option>
            </select>
          </S.Input>
        </S.InfosProduct>

        <ManageProducts />
      </S.ContentContainer>
    </S.ProductModalContainer>
  );
}

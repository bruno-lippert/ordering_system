import React, { useEffect, useState } from "react";
import ManageProducts from "../../menageProducts";
import * as S from "./styles";
import { useSelector } from "react-redux";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { priceFormatting } from "../../../../helpers/formattedInformation";
import { Product } from "../../../../types/Product";

type Props = {
  setProductModal: (v: boolean) => void;
  isEditing: boolean;
  setIsEditing: (v: boolean) => void;
};

export default function ProductModal({ setProductModal, isEditing, setIsEditing }: Props) {

  const [description, setDescription] = useState<string>('')
  const [id,setId] = useState<string>('')
  const [price,setPrice] = useState<number>()
  const [stockquantity,setStockquantity] = useState<number>()
  const [unitofmeasure,setUnitofmeasure] = useState<string>()
  const product: Product = useSelector(
    (state: any) => state.productsReducer.selectedProduct
  );

  useEffect(() => {
    if(isEditing) {
      setDescription(product.description)
      setId(product.id)
      setPrice(product.price)
      setStockquantity(product.stockquantity)
      setUnitofmeasure(product.unitofmeasure)
    }
  }, [])
  

  const handleCloseModal = () => {
    setProductModal(false);
    setIsEditing(false)
  };

  const handleDescriptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(event.target.value);
  };
  const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(Number(event.target.value));
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
              value={isEditing? id : ''}
            />
          </S.Input>
          <S.Input>
            <label htmlFor="description">Descrição:</label>
            <input
              type="text"
              name="description"
              id="description"
              onChange={handleDescriptionChange}
              value={isEditing? description :  ''}
            />
          </S.Input>
          <S.Input>
            <label htmlFor="price">Preço:</label>
            <input
              type="text"
              name="price"
              id="price"
              onChange={handlePriceChange}
              value={isEditing ? priceFormatting(price) : null}
            />
          </S.Input>
          <S.Input>
            <label htmlFor="stockquantity">Estoque: </label>
            <input
              type="text"
              name="stockquantity"
              id="stockquantity"
              value={isEditing ? stockquantity : null}
              disabled
            />
          </S.Input>
          <S.Input>
            <label htmlFor="unitofmeasure">Uni de medida:</label>
            <select name="unitofmeasure" id="unitofmeasure">
              <option value={isEditing ? unitofmeasure : null}>
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

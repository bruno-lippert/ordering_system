import React, { useEffect, useState } from "react";
import ManageProducts from "../../menageProducts";
import * as S from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { priceFormatting } from "../../../../helpers/formattedInformation";
import { Product } from "../../../../types/Product";
import { setSelectedProduct } from "../../../../redux/products/slice";
import { updatePtoduct } from "../../../../services/productsManagement";

type Props = {
  setProductModal: (v: boolean) => void;
  isEditing: boolean;
  setIsEditing: (v: boolean) => void;
};

export default function ProductModal({
  setProductModal,
  isEditing,
  setIsEditing,
}: Props) {
  const dispatch = useDispatch();
  const [prod, setProd] = useState<Product>({
    id: "",
    description: "",
    price: 0,
    stockquantity: 0,
    unitofmeasure: "",
  });
  const [isPriceInputFocused, setIsPriceInputFocused] = useState<boolean>(false)

  const product: Product = useSelector(
    (state: any) => state.productsReducer.selectedProduct
  );

  useEffect(() => {
    if (isEditing) {
      setProd({
        id: product.id,
        description: product.description,
        price: product.price,
        stockquantity: product.stockquantity,
        unitofmeasure: product.unitofmeasure,
      });
    }
  }, []);

  const handleCloseModal = () => {
    setProductModal(false);
    setIsEditing(false);
  };

  const handleDescriptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setProd((prevProd) => {
      return { ...prevProd, description: event.target.value };
    });
    dispatch(setSelectedProduct(prod))
  };
  const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value.replace(',', '.'); // Substitui vírgula por ponto
    const parsedValue = parseFloat(inputValue); 
    setProd((newProd) => {
      return { ...newProd, price: isNaN(parsedValue) ? undefined : parsedValue };
    });
    dispatch(setSelectedProduct(prod))
  };

  const updateProduct = async () => {
    await updatePtoduct(
      {
        description: product.description,
        price: product.price,
        stockquantity: product.stockquantity,
        unitofmeasure: product.unitofmeasure,
      },
      product.id
    );

    setIsEditing(false)
    setProductModal(false)
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
              value={prod.id}
            />
          </S.Input>

          <S.Input>
            <label htmlFor="description">Descrição:</label>
            <input
              type="text"
              name="description"
              id="description"
              onChange={handleDescriptionChange}
              value={prod.description}
            />
          </S.Input>

          <S.Input>
            <label htmlFor="price">Preço:</label>
            <input
              type="number"
              name="price"
              id="price"
              onChange={handlePriceChange}
              value={isPriceInputFocused ? prod.price : prod.price} //isPriceInputFocused ? prod.price : priceFormatting(Number(prod.price))
              onFocus={() => setIsPriceInputFocused(true)}
              onBlur={() => setIsPriceInputFocused(false)}
            />
          </S.Input>

          <S.Input>
            <label htmlFor="stockquantity">Estoque: </label>
            <input
              type="text"
              name="stockquantity"
              id="stockquantity"
              value={prod.stockquantity}
              disabled
            />
          </S.Input>

          <S.Input>
            <label htmlFor="unitofmeasure">Uni de medida:</label>
            <select name="unitofmeasure" id="unitofmeasure">
              <option value={prod.unitofmeasure}>
                {product.unitofmeasure}
              </option>
            </select>
          </S.Input>
        </S.InfosProduct>

        <ManageProducts updateProduct={updateProduct} />
      </S.ContentContainer>
    </S.ProductModalContainer>
  );
}
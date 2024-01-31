import React, { useEffect, useState } from "react";
import ManageProducts from "../../menageProducts";
import * as S from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { Product } from "../../../../types/Product";
import { setSelectedProduct } from "../../../../redux/products/slice";
import {
  createProduct,
  updatePtoduct,
} from "../../../../services/productsManagement";

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

  const handleDescriptionChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setProd((prevProd) => {
      return { ...prevProd, description: event.target.value };
    });
    dispatch(setSelectedProduct(prod));
  };
  const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value.replace(",", "."); // Substitui vírgula por ponto
    const parsedValue = parseFloat(inputValue);
    setProd((newProd) => {
      return { ...newProd, price: parsedValue };
    });
    dispatch(setSelectedProduct(prod));
  };

  const handleUnitOfMeasureCHange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setProd((newProd) => {
      return { ...newProd, unitofmeasure: event.target.value };
    });
    dispatch(setSelectedProduct(prod));
  };

  const saveProduct = async () => {
    if (isEditing) {
      await updatePtoduct(prod, prod.id);

      setIsEditing(false);
      setProductModal(false);
    } else {
      await createProduct({
        idcompany: 46,
        description: product.description,
        price: product.price,
        stockquantity: product.stockquantity,
        unitofmeasure: product.unitofmeasure,
      });
      setProductModal(false);
    }
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
              className="teste"
              onChange={handlePriceChange}
              value={prod.price}
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
            <select
              name="unitofmeasure"
              id="unitofmeasure"
              onChange={handleUnitOfMeasureCHange}
            >
              <option value={prod.unitofmeasure}>
                {product.unitofmeasure}
              </option>
              <option value="unid">Unid</option>
            </select>
          </S.Input>
        </S.InfosProduct>

        <ManageProducts saveProduct={saveProduct} />
      </S.ContentContainer>
    </S.ProductModalContainer>
  );
}

import React, { useContext, useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ManageProducts from "../../menageProducts";
import * as S from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { createProduct, deletePtoduct, updatePtoduct } from "../../../../../services/productsManagement";
import { ProductsContext } from "../../../../../context/ProductsContext";
import { setSelectedProduct } from "../../../../../redux/products/slice";
import { Product } from "../../../../../types/Product";

type Props = {
  isEditing: boolean;
  setIsEditing: (v: boolean) => void;
};

export default function ProductModal({ isEditing, setIsEditing }: Props) {
  const { productModal, setProductModal, fetchProducts } = useContext(ProductsContext)!;
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
    const newDescription = event.target.value;
    setProd((prevProd) => {
      return { ...prevProd, description: newDescription };
    });
    dispatch(setSelectedProduct({ ...prod, description: newDescription }));
  };
  const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value.replace(",", "."); // Substitui vírgula por ponto
    const parsedValue = parseFloat(inputValue);
    setProd((newProd) => {
      return { ...newProd, price: parsedValue };
    });
    dispatch(setSelectedProduct({ ...prod, price: parsedValue }));
  };

  const handleUnitOfMeasureChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const newUnitOfMeasure = event.target.value;
    setProd((newProd) => {
      return { ...newProd, unitofmeasure: event.target.value };
    });
    dispatch(setSelectedProduct({ ...prod, unitofmeasure: newUnitOfMeasure }));
  };

  const saveProduct = async () => {
    if (validation()) {
      if (isEditing) {
        await updatePtoduct(prod, prod.id!);

        setIsEditing(false);
        setProductModal(false);
        await fetchProducts()
      } else {
        await createProduct({
          idcompany: Number(localStorage.getItem("currentIdCompany")),
          description: prod.description,
          price: prod.price,
          stockquantity: prod.stockquantity,
          unitofmeasure: prod.unitofmeasure,
        });
        setProductModal(false);
        await fetchProducts()
      }
    }
  };

  const delProduct = async () => {
    try {
      await deletePtoduct(prod.id!);
      setProductModal(false);
      await fetchProducts()
    } catch {
      toastError(`Erro ao excluir produto!`)
    }
  };

  const validation = () => {
    if (prod.description == "") {
      toastError(`Descrição do produto não informado!`);
    } else if (isNaN(prod.price)) {
      toastError(`Preço do produto não informado!`);
    } else if (prod.unitofmeasure == "") {
      toastError(`Undidade de medida não informado!`);
    } else {
      return true;
    }
  };

  const toastError = (message: string) => {
    toast.error(message, {
      position: toast.POSITION.TOP_RIGHT,
      theme: "colored",
    });
  };

  return (
    <S.ProductModalContainer>
      <S.ContentContainer>
        <div className="closeModal" onClick={handleCloseModal}>
          <IoMdCloseCircleOutline />
        </div>
        <S.InfosProduct>
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
            <label htmlFor="unitofmeasure">Unidade de medida:</label>
            <select
              name="unitofmeasure"
              id="unitofmeasure"
              onChange={handleUnitOfMeasureChange}
            >
              <option value={prod.unitofmeasure}>
                {product.unitofmeasure}
              </option>
              <option value="unid">Unid</option>
            </select>
          </S.Input>
        </S.InfosProduct>

        <ManageProducts saveProduct={saveProduct} delProduct={delProduct} />
      </S.ContentContainer>
      <ToastContainer />
    </S.ProductModalContainer>
  );
}

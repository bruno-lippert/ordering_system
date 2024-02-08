import React, { useContext, useEffect, useState } from "react";
import { Product } from "../../../../types/Product";
import * as S from "./styles";
import { useDispatch } from "react-redux";
import ProductTableItem from "../tableItem";
import { getProductsByIDCompany } from "../../../../services/productsManagement";
import { setProduct } from "../../../../redux/products/slice";
import { ProductsContext } from "../../../../context/ProductsContext";

export default function ProductTableArea() {
  const { description } = useContext(ProductsContext);
  const dispatch = useDispatch();
  const [products, setProducts] = useState<Product[]>([]);
  const [idCompany, setIdCompany] = useState<string>();

  useEffect(() => {
    //localStorage.setItem("", "46");
    setIdCompany(localStorage.getItem("currentIdCompany"));
    fetchProducts();
  }, [products, description]);

  const fetchProducts = async () => {
    try {
      const fetchedProducts = await getProductsByIDCompany(idCompany);

    // Se houver uma descrição, filtre os produtos com base nela
    const filteredProducts = description
      ? fetchedProducts.filter((product) =>
          product.description.toLowerCase().includes(description.toLowerCase())
        )
      : fetchedProducts;

    setProducts(filteredProducts);
    } catch {
      setProducts([])
    }
    
  };

  if (products && products.length > 0) {
    setTimeout(() => {
      dispatch(setProduct(products));
    }, 0);
  }

  return (
    <S.TableAreaContainer>
      <S.Table>
        <S.TableHeadContainer>
          <S.TableHeadColumn
            width={45}
            style={{
              borderTopLeftRadius: "8px",
              borderBottomLeftRadius: "8px",
            }}
          >
            <h3>Descrição</h3>
          </S.TableHeadColumn>
          <S.TableHeadColumn width={25}>
            <h3>Preço</h3>
          </S.TableHeadColumn>
          <S.TableHeadColumn width={15}>
            <h3>Em estoque</h3>
          </S.TableHeadColumn>
          <S.TableHeadColumn
            width={15}
            style={{
              borderTopRightRadius: "8px",
              borderBottomRightRadius: "8px",
            }}
          >
            <h3>Unid de medida</h3>
          </S.TableHeadColumn>
        </S.TableHeadContainer>
        <ProductTableItem />
      </S.Table>
    </S.TableAreaContainer>
  );
}

import React, { useEffect, useState } from "react";
import { Product } from "../../../../types/Product";
import * as S from "./styles";
import { useDispatch, useSelector } from "react-redux";
import ProductTableItem from "../tableItem";
import { getProductsByIDCompany } from "../../../../services/productsManagement";
import { setProduct } from "../../../../redux/products/slice";

export default function ProductTableArea() {
  const [products, setProducts] = useState<Product[]>([]);
  const dispatch = useDispatch()

  useEffect(() => {
    localStorage.setItem("currentIdCompany", "46");
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    setProducts(await getProductsByIDCompany("46"));
  };

  if(products.length > 0) {
    setTimeout(() => {
       dispatch(setProduct(products));
    }, 0)
   
  }
  
  return (
    <S.Container>
      <S.Table>
        <S.TableHeadContainer>
          <S.TableHeadColumn
          width={10}
          style={{borderTopLeftRadius: '8px', borderBottomLeftRadius: '8px'}}>
            <h3>ID</h3></S.TableHeadColumn>
          <S.TableHeadColumn width={40}><h3>Descrição</h3></S.TableHeadColumn>
          <S.TableHeadColumn width={20}><h3>Preço</h3></S.TableHeadColumn>
          <S.TableHeadColumn width={15}><h3>Em estoque</h3></S.TableHeadColumn>
          <S.TableHeadColumn
          width={15}
          style={{borderTopRightRadius: '8px', borderBottomRightRadius: '8px'}}>
            <h3>Unid de medida</h3></S.TableHeadColumn>
        </S.TableHeadContainer>
        <ProductTableItem />
      </S.Table>
    </S.Container>
  );
}

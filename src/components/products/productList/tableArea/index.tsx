import React, { useEffect } from "react";
import { Product } from "../../../../types/Product";
import * as S from "./styles";
import rootReducer from "../../../../redux/root-reducer";
import { useSelector } from "react-redux";

type Props = {
  prod: Product[];
};

export default function ProductTableArea({ prod }: Props) {
  const { products } = useSelector(
    (rootReducer: any) => rootReducer.productsReducer
  );
  console.log(products.map((prod) => prod));
  return (
    <S.Container>
      <S.Table>
        <thead>
          <S.TableHeadColumn width={10}>ID</S.TableHeadColumn>
          <S.TableHeadColumn width={40}>Descição</S.TableHeadColumn>
          <S.TableHeadColumn width={20}>Preço</S.TableHeadColumn>
          <S.TableHeadColumn width={15}>Em estoque</S.TableHeadColumn>
          <S.TableHeadColumn width={15}>Unid de medida</S.TableHeadColumn>
        </thead>
        <tbody>
          {prod ? prod.map((prod) => {
            <tr key={produto.id}>{prod.description}</tr>
          }) : <p>Nenhum produto cadastrado!</p>}
        </tbody>
      </S.Table>
    </S.Container>
  );
}

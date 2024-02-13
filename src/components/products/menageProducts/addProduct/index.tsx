import React, { useContext } from 'react';
import * as S from './styles';
import { Button } from '../styles';
import { ProductsContext } from '../../../../context/ProductsContext';

export default function AddProductButton() {
  const { productModal, setProductModal } = useContext(ProductsContext);
  return (
    <S.AddContainer>
      <Button onClick={() => setProductModal(true)}>
        Incluir
      </Button>
    </S.AddContainer>
  )
}

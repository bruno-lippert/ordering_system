import React from 'react';
import * as S from './styles';
import { Button } from '../styles';

type Props = {
  setProductModal: (v: boolean) => void;
}

export default function SaveProductButton({ setProductModal }: Props) {
  return (
    <S.AddContainer>
      <Button onClick={() => setProductModal(true)}>
        Incluir
      </Button>
    </S.AddContainer>
  )
}

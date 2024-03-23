import React from 'react'
import * as S from './styles'
import { Button } from '../styles'

type Props = {
  delProduct: () => void
}

export default function DeleteProduct({ delProduct }: Props) {
  return (
    <S.DeleteContainer>
      <Button onClick={delProduct}>
        Excluir
      </Button>
    </S.DeleteContainer>
  )
}

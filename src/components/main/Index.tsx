import React from 'react'
import * as S from './styles'
import { Products } from '../products'

export default function Main() {
  return (
    <S.Container>
      <S.Content>
        <Products />
      </S.Content>
    </S.Container>
  )
}

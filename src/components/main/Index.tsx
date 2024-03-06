import React from 'react'
import * as S from './styles'
import Orders from './orders/orders'
import Costumers from './costumers/costumers'
import { Products } from './products/products'

export default function Main() {
  return (
    <S.Container>
      <S.Content>
        <Products />
      </S.Content>
    </S.Container>
  )
}

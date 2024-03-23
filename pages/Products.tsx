import * as S from "../pageStyles/modulos";
import { Products } from "../src/components/modulos/products/products";
import Navbar from "../src/components/nav/Navbar";

export default function ProductsPage() {

  return (
    <S.Container>
      <Navbar />
      <Products />
    </S.Container>
  );
}

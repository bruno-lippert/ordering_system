
import * as S from "../pageStyles/system";
import Main from "../src/components/main/Index";
import Navbar from "../src/components/nav/Navbar";

export default function System() {

  return (
    <S.Container>
      <Navbar />
      <Main />
    </S.Container>
  );
}

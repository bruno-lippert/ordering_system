
import * as S from "../pageStyles/system";
import Main from "../src/components/main/Index";
import Navbar from "../src/components/nav/Navbar";

export default function System() {

  // useEffect(() => {
  //   setCurrentUser(localStorage.getItem("currentUser"))
  //   setCurrentCompany(localStorage.getItem("currentCompanyName"))
  // })


  return (
    <S.Container>
      <Navbar />
      <Main />
    </S.Container>
  );
}

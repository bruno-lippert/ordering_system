import React, { useEffect, useState } from "react";
import * as S from "./styles";
import { useRouter } from "next/router";

export default function Navbar() {
    const [currentUser, setCurrentUser] = useState<string>("");
    const [currentCompany, setCurrentCompany] = useState<string>("");
  
    const router = useRouter();
  
    useEffect(() => {
      setCurrentUser(localStorage.getItem("currentUser"))
      setCurrentCompany(localStorage.getItem("currentCompanyName"))
    })
    
    const logout = () => {
      localStorage.clear();
      router.push("/Login");
    };
  
    return (
      <S.Container>
        <S.Nav>
          <S.NavItensContainer>
            <S.Navitens>
              <p>Clientes</p>
            </S.Navitens>
            <S.Navitens>
              <p>Produtos</p>
            </S.Navitens>
            <S.Navitens>
              <p>Pedidos</p>
            </S.Navitens>
          </S.NavItensContainer>
  
          <S.NavLoginsContainer>
              <S.logout>
                <input type="submit" value="Sair" onClick={logout} />
              </S.logout>
            <S.Navlogin>
              <S.user>{currentUser && <p>{currentUser}</p>}</S.user>
              <S.company>{currentCompany && <p>{currentCompany}</p>}</S.company>
            </S.Navlogin>
          </S.NavLoginsContainer>
        </S.Nav>
  
        <S.Main></S.Main>
      </S.Container>
    );
}

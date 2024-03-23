import React, { useEffect, useState } from "react";
import * as S from "./styles";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Navbar() {
  const [currentUser, setCurrentUser] = useState<string>("");
  const [currentCompany, setCurrentCompany] = useState<string>("");

  const router = useRouter();

  useEffect(() => {
    const user = localStorage.getItem("currentUser");
    const company = localStorage.getItem("currentCompanyName");
    if (
      user !== undefined &&
      user !== null &&
      company !== undefined &&
      company !== null
    ) {
      setCurrentUser(user);
      setCurrentCompany(company);
    } else {
      alert("Usuário não encontrado!");
      logout();
    }
  });

  const logout = () => {
    localStorage.clear();
    router.push("/Login");
  };

  return (
    <S.NavContainer>
      <S.Nav>
        <S.NavItensContainer>
          <S.Navitens>
            <Link href="/Costumers">
              <p>Clientes</p>
            </Link>
          </S.Navitens>
          <S.Navitens>
            <Link href="/Products">
              <p>Produtos</p>
            </Link>
          </S.Navitens>
          <S.Navitens>
            <p>Pedidos</p>
          </S.Navitens>
        </S.NavItensContainer>

        <S.NavLoginContainer>
          <S.logout>
            <input type="submit" value="Sair" onClick={logout} />
          </S.logout>
          <S.Navlogin>
            <S.user>{currentUser && <p>{currentUser}</p>}</S.user>
            <S.company>{currentCompany && <p>{currentCompany}</p>}</S.company>
          </S.Navlogin>
        </S.NavLoginContainer>
      </S.Nav>

      <S.Main></S.Main>
    </S.NavContainer>
  );
}

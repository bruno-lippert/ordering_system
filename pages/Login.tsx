import React, { useState } from "react";
import * as S from "../pageStyles/login";
import { Login } from "../src/types/Login";
import { User } from "../src/types/User";
import { userSingIn } from "../src/services/userManagement";
import { getIdCompanyByID } from "../src/services/companyManagement";
import { Company } from "../src/types/Company";
import { useRouter } from "next/router";

export default function Login() {
  const [login, setLogin] = useState<Login>({ username: "", password: "" });
  const [user, setUser] = useState<User[]>();

  const router = useRouter()

  const fetchUser = async () => {
    try {
      setUser(await userSingIn(login.username, login.password));
    } catch {}

    if (user) {
      localStorage.setItem("currentIdCompany", user[0].idcompany.toString());
      localStorage.setItem("currentUser", user[0].username);

      const company: Company[] = await getIdCompanyByID(user[0].idcompany)
      localStorage.setItem("currentCompanyName", company[0].name);

      router.push('/System')
    }
  };

  const handleUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLogin({ ...login, username: e.target.value });
  };

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLogin({ ...login, password: e.target.value });
  };

  return (
    <S.Container>
      <S.Login>
        <h1>Login</h1>
        <div className="inputsContainer">
          <label htmlFor="username">Username:</label>
          <input
            id="username"
            className="login"
            type="text"
            placeholder="username"
            onChange={handleUsername}
          />
        </div>

        <div className="inputsContainer">
          <label htmlFor="password">Password:</label>
          <input
            id="password"
            className="login"
            type="password"
            placeholder="password"
            onChange={handlePassword}
          />
        </div>

        <input
          className="submit"
          type="submit"
          value="Entrar"
          onClick={fetchUser}
        />
      </S.Login>
    </S.Container>
  );
}

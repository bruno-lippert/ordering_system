import React, { useState } from "react";
import * as S from "../pageStyles/login";
import { Login } from "../src/types/Login";
import { User } from "../src/types/User";
import { userSingIn } from "../src/services/userManagement";
import { getIdCompanyByID } from "../src/services/companyManagement";
import { Company } from "../src/types/Company";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";

export default function Login() {
  const [login, setLogin] = useState<Login>({ username: "", password: "" });

  const router = useRouter();

  const fetchUser = async () => {
    const fetchedUser = await userSingIn(login.username, login.password);
    if (
      fetchedUser !== null &&
      fetchedUser !== undefined &&
      fetchedUser.length > 0
    ) {

      const user = fetchedUser[0]
      localStorage.setItem("currentIdCompany", user.idcompany.toString());
      localStorage.setItem("currentUser", user.username);

      const company: Company[] | null = await getIdCompanyByID(
        user.idcompany
      );
      localStorage.setItem("currentCompanyName", company![0].name);
      router.push("/System");
    } else {
      alert("Usuário não encontrado!")
      // toastError(`Usuário não encontrado!`);
    }
  };

  const handleUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLogin({ ...login, username: e.target.value });
  };

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLogin({ ...login, password: e.target.value });
  };

  const toastError = (message: string) => {
    toast.error(message, {
      position: toast.POSITION.TOP_RIGHT,
      theme: "colored",
    });
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

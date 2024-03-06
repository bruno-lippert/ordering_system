import React, { useState } from "react";
import { Company } from "../../types/Company";
import { useRouter } from "next/router";
import {
  getIdCompanyByCNPJ,
  regiterCompany,
} from "../../services/companyManagement";
import { userSingUp } from "../../services/userManagement";
import { ToastContainer, toast } from "react-toastify";
import * as S from "./styles";

export default function Index() {
  const states = [
    "AC",
    "AL",
    "AP",
    "AM",
    "BA",
    "CE",
    "DF",
    "ES",
    "GO",
    "MA",
    "MT",
    "MS",
    "MG",
    "PA",
    "PB",
    "PR",
    "PE",
    "PI",
    "RJ",
    "RN",
    "RS",
    "RO",
    "RR",
    "SC",
    "SP",
    "SE",
    "TO",
  ];

  const [company, setCompany] = useState<Company>({
    name: "",
    cnpj: "",
    cep: "",
    street: "",
    neighborhood: "",
    city: "",
    state: "",
    country: "",
  });

  const router = useRouter();

  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCompany({ ...company, name: e.target.value.trim() });
  };
  const handleCNPJ = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCompany({ ...company, cnpj: e.target.value });
  };
  const handleCEP = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCompany({ ...company, cep: e.target.value });
  };
  const handleStreet = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCompany({ ...company, street: e.target.value.trim() });
  };
  const handleNeighborhood = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCompany({ ...company, neighborhood: e.target.value.trim() });
  };
  const handleCity = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCompany({ ...company, city: e.target.value.trim() });
  };
  const handleState = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCompany({ ...company, state: e.target.value });
  };
  const handleCountry = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCompany({ ...company, country: e.target.value.trim() });
  };

  const validation = () => {
    const requiredFields = [
      { field: company.name, message: "Nome da empresa não informado!" },
      { field: company.cnpj, message: "CNPJ não informado!" },
      { field: company.cep, message: "CEP não informado!" },
      { field: company.street, message: "Rua não informada!" },
      { field: company.neighborhood, message: "Bairro não informado!" },
      { field: company.city, message: "Cidade não informada!" },
      {
        field: company.state,
        message: "Selecione um estado!",
        check: (value) => !states.includes(value),
      },
      { field: company.country, message: "País não informado!" },
    ];

    for (const { field, message, check } of requiredFields) {
      if (!field || (check && check(field))) {
        alert(message);
        return false;
      }
    }

    if (!cepValidation(company.cep)) {
      alert("CEP inválido!");
      return false;
    }
    if (!cnpjValidation(company.cnpj)) {
      alert("CNPJ inválido!");
      return false;
    }

    return true;
  };

  const cepValidation = (cep) => {
    const regexCEP = /^[0-9]{5}[0-9]{3}$/;
    console.log(regexCEP.test(cep))
    return regexCEP.test(cep);
  };

  const cnpjValidation = (cnpj) => {
    const regexCNPJ = /^\d{2}\d{3}\d{3}\d{4}\d{2}$/;
    return regexCNPJ.test(cnpj);
  };

  const register = async () => {
    if (validation()) {
      await regiterCompany(company);

      const data = await getIdCompanyByCNPJ(Number(company.cnpj));

      setCompany({
        name: "",
        cnpj: "",
        cep: "",
        street: "",
        neighborhood: "",
        city: "",
        state: "",
        country: "",
      });

      if (data && data.length > 0) {
        const id = data[0].idcompany;
        const name = data[0].name;
        const userName = name.replace(/\s/g, "").toLowerCase();

        const adminUser = {
          name: name,
          idcompany: Number(id),
          username: userName,
          password: "orderingsystem",
        };

        await userSingUp(adminUser);

        localStorage.setItem("currentIdCompany", id.toString());
        localStorage.setItem("currentCompanyName", name);
        localStorage.setItem("currentUser", userName);

        router.push("/System");
      } else {
        console.log("Empresa não encontrada pelo CNPJ.");
      }
    }
  };

  const toastError = (message: string) => {
    toast.error(message, {
      position: toast.POSITION.TOP_RIGHT,
      theme: "colored",
    });
  };

  return (
    <S.Container>
      <S.Company>
        <h1>Registrar empresa</h1>
        <div className="inputsContainer">
          <label htmlFor="companyName">Nome da empresa: </label>
          <input
            className="inputData"
            type="text"
            id="companyName"
            value={company.name}
            onChange={handleName}
          />
        </div>

        <div className="inputsContainer">
          <label htmlFor="cnpj">CNPJ: </label>
          <input
            className="inputData"
            type="text"
            id="cnpj"
            value={company.cnpj}
            onChange={handleCNPJ}
          />
        </div>

        <div className="inputsContainer">
          <label htmlFor="cnpj">CEP: </label>
          <input
            className="inputData"
            type="number"
            id="cep"
            value={company.cep}
            onChange={handleCEP}
          />
        </div>

        <div className="inputsContainer">
          <label htmlFor="street">Rua: </label>
          <input
            className="inputData"
            type="text"
            id="street"
            value={company.street}
            onChange={handleStreet}
          />
        </div>

        <div className="inputsContainer">
          <label htmlFor="neighborhood">Bairro: </label>
          <input
            className="inputData"
            type="text"
            id="neighborhood"
            value={company.neighborhood}
            onChange={handleNeighborhood}
          />
        </div>

        <div className="inputsContainer">
          <label htmlFor="city">Cidade: </label>
          <input
            className="inputData"
            type="text"
            value={company.city}
            onChange={handleCity}
          />
        </div>

        <div className="inputsContainer">
          Estado:
          <select
            className="inputData"
            id="state"
            onChange={handleState}
            value={company.state}
          >
            <option value=""></option>
            {states.map((state, key) => {
              return (
                <option key={key} value={state}>
                  {state}
                </option>
              );
            })}
          </select>
        </div>

        <div className="inputsContainer">
          <label htmlFor="country">País: </label>
          <input
            className="inputData"
            type="text"
            id="country"
            value={company.country}
            onChange={handleCountry}
          />
        </div>

        <input type="submit" value="Cadastrar" onClick={register} />
      </S.Company>
      <ToastContainer />
    </S.Container>
  );
}

import React, { useState } from "react";
import * as S from "../pageStyles/companyRegistartion";
import { Company } from "../src/types/Company";
import { getIdCompanyByCNPJ, regiterCompany } from "../src/services/companyManagement";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { User } from "../src/types/User";
import { getAllUsersByCompanyId, userSingUp } from "../src/services/userManagement";

export default function companyRegistration() {
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
    cnpj: 0,
    street: "",
    neighborhood: "",
    city: "",
    state: "",
    country: "",
  });

  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCompany({ ...company, name: e.target.value.trim() });
  };
  const handleCNPJ = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCompany({ ...company, cnpj: Number(e.target.value) });
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
    if (company.name === "") {
      toastError(`Nome da empresa não informado!`);
      return false;
    } else if (company.cnpj === 0) {
      toastError(`CNPJ não informado!`);
      return false;
    } else if (company.street === "") {
      toastError(`Rua não informada!`);
    } else if (company.neighborhood === "") {
      toastError(`Bairro não informado!`);
    } else if (company.city === "") {
      toastError(`Cidade não informado!`);
    } else if (!states.includes(company.state)) {
      toastError(`Selecione um estado!`);
    } else if (company.country === "") {
      toastError(`País não informado!`);
    } else {
      return true;
    }
  };

  const register = async () => {
    if (validation()) {
      await regiterCompany(company);

      const data = await getIdCompanyByCNPJ(company.cnpj);

      if (data && data.length > 0) {
        const id = data[0].idcompany;
        const name = data[0].name;
        
        const adminUser = {
          name: name,
          idcompany: Number(id),
          email: `${name}@gmail.com`,
          password: 'orderingsystem'
        }

        await userSingUp(adminUser)
  
        localStorage.setItem('currentIdCompany', id.toString());
      } else {
        console.log('Empresa não encontrada pelo CNPJ.');
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
        <div>
          <label htmlFor="companyName">Nome da empresa: </label>
          <input
            className="inputData"
            type="text"
            id="companyName"
            onChange={handleName}
          />
        </div>

        <div>
          <label htmlFor="cnpj">CNPJ: </label>
          <input
            className="inputData"
            type="text"
            id="cnpj"
            onChange={handleCNPJ}
          />
        </div>

        <div>
          <label htmlFor="street">Rua: </label>
          <input
            className="inputData"
            type="text"
            id="street"
            onChange={handleStreet}
          />
        </div>

        <div>
          <label htmlFor="neighborhood">Bairro: </label>
          <input
            className="inputData"
            type="text"
            id="neighborhood"
            onChange={handleNeighborhood}
          />
        </div>

        <div>
          <label htmlFor="city">Cidade: </label>
          <input className="inputData" type="text" onChange={handleCity} />
        </div>

        <div>
          Estado:
          <select className="inputData" id="state" onChange={handleState}>
            <option value=""></option>
            {states.map((state, key) => {
              return <option key={key} value={state}>{state}</option>;
            })}
          </select>
        </div>

        <div>
          <label htmlFor="country">País: </label>
          <input
            className="inputData"
            type="text"
            id="country"
            onChange={handleCountry}
          />
        </div>

        <input type="submit" value="Cadastrar" onClick={register} />
      </S.Company>
      <ToastContainer />
    </S.Container>
  );
}

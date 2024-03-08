import React, { useContext } from "react";
import * as S from "./styles";
import { CompanyRegistrationContext } from "../../../context/CompanyRegistrationContext";
import { validarExistenciaCEP } from "../../../services/APIs/cepAPI";

export default function ZipCodeLookup() {
  const { company, setCompany } = useContext(CompanyRegistrationContext)!;

  const populaEndereco = async () => {
    const dadosCEP = await validarExistenciaCEP(company.cep);
    setCompany({ ...company, street: dadosCEP.logradouro, city: dadosCEP.localidade, neighborhood: dadosCEP.bairro, state: dadosCEP.uf });
  };
  return (
    <S.ZipCodeLookupContainer>
      <button type="submit" onClick={populaEndereco}>Consultar</button>
    </S.ZipCodeLookupContainer>
  );
}

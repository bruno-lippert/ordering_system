import React, { useState } from 'react';
import * as S from '../pageStyles/companyRegistartion'
import { Company } from '../src/types/Company';

export default function companyRegistration() {

    const [company, setCompany] = useState<Company>({
      name: '',
      cnpj: 0,
      street: '',
      neighborhood: '',
      city: '',
      state: '',
      country: ''
    })

    const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
      setCompany({...company, name: e.target.value })
    }
    const handleCNPJ = (e: React.ChangeEvent<HTMLInputElement>) => {
      setCompany({...company, cnpj: Number(e.target.value) })
    }
    const handleStreet = (e: React.ChangeEvent<HTMLInputElement>) => {
      setCompany({...company, street: e.target.value})
    }
    const handleNeighborhood = (e: React.ChangeEvent<HTMLInputElement>) => {
      setCompany({...company, neighborhood: e.target.value })
    }
    const handleCity = (e: React.ChangeEvent<HTMLInputElement>) => {
      setCompany({...company, city: e.target.value })
    }
    const handleState = (e: React.ChangeEvent<HTMLInputElement>) => {
      setCompany({...company, state: e.target.value })
    }
    const handleCountry = (e: React.ChangeEvent<HTMLInputElement>) => {
      setCompany({...company, country: e.target.value })
    }

  return (
    <S.Container>
      <S.Company>
        <h1>Registrar empresa</h1>
        <div>
          <label htmlFor="companyName">Nome da empresa:</label>
          <input type="text" id='companyName'onChange={() => handleName}/>
        </div>

        <div>
          <label htmlFor="cnpj">CNPJ:</label>
          <input type="text" id='cnpj' onChange={() => handleCNPJ}/>
        </div>

        <div>
          <label htmlFor="street">Rua:</label>
          <input type="text" id='street' onChange={() => handleStreet}/>
        </div>

        <div>
          <label htmlFor="neighborhood">Bairro:</label>
          <input type="text"id='neighborhood' onChange={() => handleNeighborhood}/>
        </div>

        <div>
          <label htmlFor="city">Cidade:</label>
          <input type="text"  onChange={() => handleCity}/>
        </div>

        <div>
          <label htmlFor="state">Estado</label>
          <input type="text" id='state' onChange={() => handleState}/>
        </div>

        <div>
          <label htmlFor="country">País:</label>
          <input type="text" id='country' onChange={() => handleCountry}/>
        </div>


      </S.Company>
    </S.Container>
  );
}

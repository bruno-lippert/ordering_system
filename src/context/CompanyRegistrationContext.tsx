import React, { createContext, useState } from 'react'
import { Company } from '../types/Company';

interface CompanyRegistrationContextProps {
    company: Company,
    setCompany: (company: Company) => void;
}

export const CompanyRegistrationContext = createContext<CompanyRegistrationContextProps | undefined>(undefined)

export default function CompanyRegistrationProvider({ children }) {
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
  return (
    <CompanyRegistrationContext.Provider value={{company, setCompany}}>
      {children}
    </CompanyRegistrationContext.Provider>
  )
}

import React from "react";
import Index from "../src/components/companyregistration";
import CompanyRegistrationProvider from "../src/context/CompanyRegistrationContext";

export default function companyRegistration() {
  return (
    <CompanyRegistrationProvider>
      <Index />
    </CompanyRegistrationProvider>
  );
}

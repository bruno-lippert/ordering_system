export function cepValidation(cep) {
  const regexCEP = /^[0-9]{5}[0-9]{3}$/;
  console.log(regexCEP.test(cep));
  return regexCEP.test(cep);
}

export function cnpjValidation(cnpj) {
  const regexCNPJ = /^\d{2}\d{3}\d{3}\d{4}\d{2}$/;
  return regexCNPJ.test(cnpj);
};

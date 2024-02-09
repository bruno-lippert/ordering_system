import supabase from "../database";
import { Company } from "../types/Company";

export async function regiterCompany(company: Company) {
  const { data, error } = await supabase
    .from("company")
    .insert(company)
    .select();

  if (error) {
    console.log("Erro ao criar empresa:", error);
    return null;
  }

  return data;
}

export async function getIdCompanyByCNPJ(cnpj: number) {
  let { data, error } = await supabase
  .from("company")
  .select("*")
  .eq('cnpj', cnpj)

  if (error) {
    console.log("Erro ao consultar empresa!:", error);
    return null;
  }

  return data;
}

export async function getIdCompanyByID(id: number) {
  let { data, error } = await supabase
  .from("company")
  .select("*")
  .eq('idcompany', id)

  if (error) {
    console.log("Erro ao consultar empresa!:", error);
    return null;
  }

  return data;
}
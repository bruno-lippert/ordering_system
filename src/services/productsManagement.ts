import supabase from "../database";
import { Product } from "../types/Product";

export async function getProductsByIDCompany(idCompany: string) {
  let { data, error } = await supabase
    .from("products")
    .select("*")
    .eq("idcompany", idCompany);

    if (error) {
      console.log("Erro ao buscar produtos:", error);
      return null;
    }
  
    return data;
}

export async function addProduct(prod : Product) {
  const { data, error } = await supabase
    .from("products")
    .insert(prod)
    .select();

    if (error) {
      console.log("Erro ao cadastrar produtos:", error);
      return null;
    }

    return data;
}
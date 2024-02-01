import supabase from "../database";
import { Product } from "../types/Product";

export async function getProductsByIDCompany(
  idCompany: string
) {
    let { data, error } = await supabase
      .from("products")
      .select("*")
      .eq("idcompany", idCompany)
      .order("id");

  if (error) {
    console.log("Erro ao buscar produtos:", error);
    return null;
  }

  return data;
}

export async function createProduct(prod: Product) {
  const { data, error } = await supabase.from("products").insert(prod).select();

  if (error) {
    console.log("Erro ao cadastrar produtos:", error);
    return null;
  }

  return data;
}

export async function updatePtoduct(prod: Product, idProd: string) {
  const { data, error } = await supabase
    .from("products")
    .update(prod)
    .eq("id", idProd)
    .select();

  if (error) {
    console.error("Erro ao editar:", error.message);
    return;
  }

  return data;
}

export async function deletePtoduct(idProd: string) {
  const { error } = await supabase.from("products").delete().eq("id", idProd);

  if (error) {
    console.error("Erro ao editar:", error.message);
    return;
  }
}

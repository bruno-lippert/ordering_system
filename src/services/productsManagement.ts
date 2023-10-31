import supabase from "../database";
import { Product } from "../types/Product";

export async function getProducts(idCompany: string) {
  let { data: products, error } = await supabase
    .from("products")
    .select("*")
    .eq("idcompany", idCompany);
}

export async function addProduct(prod : Product) {
  const { data, error } = await supabase
    .from("products")
    .insert(prod)
    .select();
}

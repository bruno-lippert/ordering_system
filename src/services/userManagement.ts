import supabase from "../database";
import { User } from "../types/User";

export async function userSingIn() {}

export async function userSingUp(user: User) {
  const { data, error } = await supabase.from("user")
  .insert(user)
  .select();

  if (error) {
    console.log("Erro ao criar usuário:", error);
    return null;
  }

  return data;
}

export async function getAllUsersByCompanyId(idCompany: number) {
  let { data: company, error } = await supabase
  .from("user")
  .select("*");
}

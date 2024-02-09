import supabase from "../database";
import { User } from "../types/User";

export async function userSingIn(username: string, password: string) {
  const { data, error } = await supabase
    .from("user")
    .select("*")
    .eq("username", username)
    .eq("password", password);

  if (error) {
    console.error("Usuário não encontrado:", error);
    return null;
  }

  if (data) {
    return data;
  }
}

export async function userSingUp(user: User) {
  const { data, error } = await supabase.from("user").insert(user).select();

  if (error) {
    console.log("Erro ao criar usuário:", error);
    return null;
  }

  return data;
}

export async function getAllUsersByCompanyId(idCompany: number) {
  let { data: company, error } = await supabase.from("user").select("*");
}

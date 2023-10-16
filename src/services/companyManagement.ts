import supabase from '../database';
import { Company } from '../types/Company';

export async function regiterCompany(company: Company) {
    const { data, error } = await supabase.from('company').insert(company).select()

    if (error) {
        console.log("Erro ao criar usuário:", error);
        return null;
      }
    
      return data;
}
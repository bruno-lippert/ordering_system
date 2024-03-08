import axios from 'axios';

export const validarExistenciaCEP = async (cep: string) => {
    try {
      const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
      const data = response.data;
  
      if (!data.erro) {
        return data;
      } else {
        alert('CEP não encontrado ou inválido.');
        return false;
      }
    } catch (error) {
      alert('Erro na consulta CEP:')
      console.error('Erro na consulta CEP:', error.message);
      return false;
    }
  };

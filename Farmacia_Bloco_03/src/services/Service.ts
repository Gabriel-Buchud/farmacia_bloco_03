import axios from "axios"

export const api = axios.create({
    baseURL: "https://farmacia-nest.onrender.com/"
  })
  
  // Consulta com método (GET)
  export const listar = async(url: string, setDados: Function) => {
    const resposta = await api.get(url)
    setDados(resposta.data)
  }

  // Cadastro com método (POST)
  export const cadastrar = async(url: string, dados: Object, setDados: Function) => {
    const resposta = await api.post(url, dados)
    setDados(resposta.data)
  }
  
  // Atualização com método (PUT)
  export const atualizar = async(url: string, dados: Object, setDados: Function) => {
    const resposta = await api.put(url, dados)
    setDados(resposta.data)
  }

  // Exclusão com método (DELETE)
  export const deletar = async(url: string) => {
    await api.delete(url)
  }
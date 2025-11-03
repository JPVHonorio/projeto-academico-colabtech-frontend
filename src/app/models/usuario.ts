/**
 * Modelo de dados para Usuário
 * 
 * Esta classe define o modelo de dados que será retornado nas chamadas
 * de API feitas ao servidor.
 */

export interface Usuario {
    codigo: string;
    email: string;
    senha: string;
    tipoDeAcesso: number;
    status: number;
    nome: string;
    posicao: string;
    telefone: string;
    rua: string;
    bairro: string;
    numero: string;
    cidade: string;
    estado: string;
    pais: string;
    cep: string;
    urlImagem: string;
}

export interface UsuarioLogin {
    email: string;
    senha: string;
}

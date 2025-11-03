/**
 * Modelo de dados para Requisicao
 * 
 * Esta classe define o modelo de dados que será retornado nas chamadas
 * de API feitas ao servidor.
 */

export interface Requisicao {
    id?: number;
    usuarioId: number;
    nome: string;
    status: number;
    setor: string;
}

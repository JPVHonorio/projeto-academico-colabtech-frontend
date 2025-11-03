import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';
import { Requisicao } from '../../models/requisicao';
import { AuthService } from '../auth/auth-service';
import { Usuario } from '../../models/usuario';
import { toSignal } from '@angular/core/rxjs-interop';

/**
 * Classe de Service para Usuario
 * 
 * Esta classe lidará com as requisições e respostas feitas à API que
 * foi construída anteriormente no backend (academico-colabtech-backend).
 * Ela faz uso da interface Observable, que define o tipo de dado
 * esperado/enviado pela requisição e a classe HttpClient que contém 
 * métodos de chamada de API.
 */

@Injectable({
  providedIn: 'root',
})
export class RequisicaoService {

  // Injeções
  private Http = inject(HttpClient);
  private authService = inject(AuthService);

  // Atributos
  private apiServerUrl = 'http://localhost:8080';
  usuarioLogado: Usuario | null = this.authService.obterUsuarioLogado();
  listaRequisicoes = signal<Requisicao[]>([]);

  // Construtor
  constructor() {
    if (this.usuarioLogado) {
      this.AtualizarLista(this.usuarioLogado.id);
    }
  }

  // Métodos
  public obterRequisicoesDoUsuario(id: number): Observable<Requisicao[]> {
    return this.Http.get<Requisicao[]>(`${this.apiServerUrl}/requisicao/find/${id}`)
  }

  public adicionarRequisicao(req: Requisicao): Observable<Requisicao> {
    return this.Http.post<Requisicao>(`${this.apiServerUrl}/requisicao/add`, req)
  }

  public AtualizarLista(id: number) {
    this.obterRequisicoesDoUsuario(id).subscribe({
      next: (lista) => this.listaRequisicoes.set(lista),
      error: (err) => console.error('Erro ao atualizar lista:', err),
    });
  }

}

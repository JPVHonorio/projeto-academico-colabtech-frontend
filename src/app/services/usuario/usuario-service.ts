import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Usuario, UsuarioLogin } from '../../models/usuario';

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
export class UsuarioService {
    private apiServerUrl = 'http://localhost:8080';

  // Construtor
  constructor(private Http: HttpClient) { }

  // Métodos
  public obterUsuarios(): Observable<Usuario[]> {
    return this.Http.get<Usuario[]>(`${this.apiServerUrl}/usuario`)
  }

  public autorizarUsuario(usuario: UsuarioLogin): Observable<Usuario> {
    return this.Http.post<Usuario>(`${this.apiServerUrl}/usuario/login`, usuario)
  }

  public adicionarUsuario(usuario: Usuario): Observable<Usuario> {
    return this.Http.post<Usuario>(`${this.apiServerUrl}/usuario/add`, usuario)
  }

  public atualizarUsuario(usuario: Usuario): Observable<Usuario> {
    return this.Http.put<Usuario>(`${this.apiServerUrl}/usuario/update`, usuario)
  }

  public removerUsuario(id: number): Observable<void> {
    return this.Http.delete<void>(`${this.apiServerUrl}/usuario/delete/${id}`)
  }
}
